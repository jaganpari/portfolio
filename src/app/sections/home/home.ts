import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

import Typed from 'typed.js';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {

  @ViewChild('typing')
  typingElement!: ElementRef;

  techIcons = [
    { name: 'A', class: 'angular' },
    { name: 'TS', class: 'ts' },
    { name: 'JS', class: 'js' },
    { name: 'NgRx', class: 'ngrx' },
    { name: 'RxJs', class: 'rx' },
    { name: 'Nx', class: 'nx' }
  ];

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