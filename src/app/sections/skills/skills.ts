import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FRONT_END_SKILLS, TECHNOLOGIES } from '../../core/constants/skills.constants';
import { ChipsComponent } from '../../shared/ui/chips-component/chips-component';
import { SkillLevelPipe } from '../../shared/pipes/skill-level-pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ChipsComponent, SkillLevelPipe, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  searchTerm = signal('');

  frontendSkills = signal(FRONT_END_SKILLS);

  technologies = signal(TECHNOLOGIES);

  filteredTechnologies = computed(() => {
    const term = this.searchTerm();
    return this.technologies().filter((tech) =>
      tech.toLowerCase().includes(term.toLowerCase())
    );
  });

  clearSearch(): void {
    this.searchTerm.set('');
  }

}