import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

interface Project {

  title: string;

  description: string;

  technologies: string[];

}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projects: Project[] = [

    {
      title: 'ICON Digital Platform',

      description:
        'Developed a dynamic C-SSRS assessment module using Angular Reactive Forms.',

      technologies: [
        'Angular 19',
        'TypeScript',
        'RxJS',
        'NgRx'
      ]
    },

    {
      title: 'VUCEM 3.0',

      description:
        'Worked Micro Frontend architecture using Nx and Module Federation to manage multiple applications.',

      technologies: [
        'Angular 17',
        'Akita',
        'Bootstrap'
      ]
    },

    {
      title: 'Aakaash Field Track',

      description:
        'Upgraded application Angular 7 to Angular 14 version.',

      technologies: [
        'Angular 14',
        'NgRx',
        'RxJS',
        'Angular Material'
      ]
    },

    {
      title: 'Aakaash Portal',

      description:
        'Fixed UI bugs, consume RESTful APIs services and optimize performance.',

      technologies: [
        'Angular 7',
        'RxJs',
        'Bootstrap'
      ]
    },
    {
      title: 'Partner Portal',

      description:
        'Refactored legacy code to modern Angular standards in Angular 7.',

      technologies: [
        'Angular 7',
        'RxJs',
        'Bootstrap'
      ]
    },
    {
      title: 'Sata Travels',

      description:
        'Developed Single Page Applications (SPAs) using AngularJS.',

      technologies: [
        'Angular JS',
        'Bootstrap'
      ]
    }

  ];

}