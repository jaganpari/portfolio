import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

interface Project {

  title: string;

  description: string;

  technologies: string[];

  github: string;

  demo?: string;

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
      title: 'Enterprise Admin Dashboard',

      description:
        'Modern Angular dashboard with authentication, role-based access, reusable components, CRUD operations, responsive layout and charts.',

      technologies: [
        'Angular',
        'Signals',
        'RxJS',
        'Angular Material',
        'TypeScript'
      ],

      github: '#',

      demo: '#'
    },

    {
      title: 'FHIR Healthcare Portal',

      description:
        'Healthcare application implementing FHIR resources, dynamic forms, validation and REST API integration.',

      technologies: [
        'Angular',
        'FHIR',
        'REST API',
        'Angular Material'
      ],

      github: '#'
    },

    {
      title: 'Spartacus Storefront',

      description:
        'SAP Commerce Cloud storefront using Spartacus and OCC APIs with responsive UI.',

      technologies: [
        'Angular',
        'Spartacus',
        'OCC',
        'SCSS'
      ],

      github: '#'
    },

    {
      title: 'Angular Component Library',

      description:
        'Reusable enterprise UI components including tables, dialogs, forms, loaders, pagination and cards.',

      technologies: [
        'Angular',
        'SCSS',
        'Material',
        'TypeScript'
      ],

      github: '#'
    }

  ];

}