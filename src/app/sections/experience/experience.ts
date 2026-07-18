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
      company: 'ICON plc, Chennai One IT SEZ, Chennai.',
      description:
        'Developed a dynamic C-SSRS assessment module using Angular Reactive Forms.',
      technologies: [
        'Angular 19',
        'Signals',
        'RxJS',
        'Angular Material',
        'TypeScript',
        'NgRx'
      ]
    },

    {
      period: 'Jan 2025 – Jun 2025',
      title: 'Senior Technical Specialist',
      company: 'iLink Digital Private Limited, RMZ Millenia Park-II, Chennai.',
      description:
        'Worked Micro Frontend architecture using Nx and Module Federation to manage multiple applications.',
      technologies: [
        'Angular 17',
        'RxJS',
        'Bootstrap',
        'Akita',
        'Nx'
      ]
    },

    {
      period: 'Aug. 2019 – Jan. 2025',
      title: 'Senior Software Developer',
      company: 'Sify Technologies Limited, Tidel Park, Chennai.',
      description:
        'Upgraded application Angular 7 to Angular 14 version.',
      technologies: [
        'Angular 14',
        'NgRx',
        'RxJs',
        'Angulatr Material'
      ]
    },
    {
      period: 'Jul. 2017 - May 2019',
      title: 'Software Engineer Level 2',
      company: 'YuMe India Private Limited, Ascendas IT Park, Chennai.',
      description:
        'Refactored legacy code to modern Angular standards in Angular 7.',
      technologies: [
        'Angular 7',
        'Bootstrap',
        'RxJs'
      ]
    },
    {
      period: 'Jun. 2014 - Jul. 2017',
      title: 'Senior UI Developer',
      company: 'Convergent Technology Solutions Private Limited, Chennai.',
      description:
        'Developed Single Page Applications (SPAs) using AngularJS.',
      technologies: [
        'Angular JS',
        'Bootstrap'
      ]
    }

  ];

}