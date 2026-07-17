import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {

  period: string;

  title: string;

  company: string;

  description: string;

  technologies: string[];

}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experiences {

  experiences: Experience[] = [

    {
      period: 'Aug. 2025 – May 2026',
      title: 'Application Developer',
      company: 'ICON plc, Chennai One IT SEZ, Chennai',
      description:
        'Developing scalable Angular applications using Standalone Components, Signals, RxJS, Angular Material and reusable UI architecture.',
      technologies: [
        'Angular',
        'Signals',
        'RxJS',
        'Angular Material',
        'TypeScript'
      ]
    },

    {
      period: 'Jan 2025 – Jun 2025',
      title: 'Senior Technical Specialist',
      company: 'iLink Digital Private Limited, RMZ Millenia Park-II, Chennai',
      description:
        'Built enterprise applications with Reactive Forms, REST APIs, authentication, dashboards and responsive design.',
      technologies: [
        'Angular',
        'RxJS',
        'Bootstrap',
        'REST API'
      ]
    },

    {
      period: 'Aug. 2019 – Jan. 2025',
      title: 'Senior Software Developer',
      company: 'Video Ad-Tech',
      description:
        'Migrated legacy AngularJS applications to Angular while improving performance and maintainability.',
      technologies: [
        'AngularJS',
        'Angular',
        'JavaScript',
        'SCSS'
      ]
    }

  ];

}