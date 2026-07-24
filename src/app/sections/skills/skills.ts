import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FRONT_END_SKILLS, TECHNOLOGIES } from '../../core/constants/skills.constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  frontendSkills = signal(FRONT_END_SKILLS);

  technologies = signal(TECHNOLOGIES);

}