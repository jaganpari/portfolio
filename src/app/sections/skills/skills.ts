import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FRONT_END_SKILLS, TECHNOLOGIES } from '../../core/constants/skills.constants';
import { ChipsComponent } from '../../shared/ui/chips-component/chips-component';
import { SkillLevelPipe } from '../../shared/pipes/skill-level-pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ChipsComponent, SkillLevelPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  frontendSkills = signal(FRONT_END_SKILLS);

  technologies = signal(TECHNOLOGIES);

}