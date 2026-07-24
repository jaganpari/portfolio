import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild, inject, OnInit, signal
} from '@angular/core';

import Typed from 'typed.js';

import { MatButtonModule } from '@angular/material/button';
import { HomeData } from '../../core/models/home.model';
import { HomeService } from '../../core/services/home-service';
import { HighlightDirective } from '../../shared/directives/highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, HighlightDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit, OnInit {

  homeService = inject(HomeService);

  @ViewChild('typing')
  typingElement!: ElementRef;

  homeData = signal<HomeData | null>(null);
  

  ngOnInit() {
    this.homeService.getHomeData()
      .subscribe((data: HomeData) => {
        this.homeData.set(data);
      });
  }



  ngAfterViewInit(): void {

    new Typed(this.typingElement.nativeElement, {

      strings: [
        'Angular Developer',
        'Front-End Developer',
        'UI Engineer'
      ],

      typeSpeed: 60,

      backSpeed: 35,

      backDelay: 1800,

      loop: true

    });

  }

}