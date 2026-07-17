import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  percentage: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  frontendSkills: Skill[] = [
    { name: 'Angular', percentage: 95 },
    { name: 'TypeScript', percentage: 95 },
    { name: 'JavaScript', percentage: 95 },
    { name: 'RxJS', percentage: 90 },
    { name: 'Signals', percentage: 90 },
    { name: 'NgRx', percentage: 85 }
  ];

  technologies = [
    'Angular Material',
    'Bootstrap',
    'SCSS',
    'LESS',
    'Git',
    'Azure DevOps',
    'Nx',
    'Webpack',
    'Vite',
    'GitHub Copilot'
  ];

}