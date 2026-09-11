import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
  OnInit,
  signal
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
export class Home implements OnInit, AfterViewInit, OnDestroy {

  private readonly homeService = inject(HomeService);

  @ViewChild('typing')
  typingElement!: ElementRef;

  homeData = signal<HomeData | null>(null);

  private typedInstance?: Typed;
  private viewInitialized = false;

  ngOnInit(): void {
    this.homeService.getHomeData().subscribe({
      next: (data: HomeData) => {
        this.homeData.set(data);
        this.initializeTyped();
      }
    });
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    this.initializeTyped();
  }

  private initializeTyped(): void {
    const data = this.homeData();

    if (!this.viewInitialized || !data?.roles?.length) {
      return;
    }

    this.typedInstance?.destroy();

    this.typedInstance = new Typed(
      this.typingElement.nativeElement,
      {
        strings: data.roles,
        typeSpeed: 60,
        backSpeed: 35,
        backDelay: 1800,
        loop: true
      }
    );
  }

  ngOnDestroy(): void {
    this.typedInstance?.destroy();
  }
}