import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FRONT_END_SKILLS, TECHNOLOGIES } from '../../core/constants/skills.constants';
import { ChipsComponent } from '../../shared/ui/chips-component/chips-component';
import { SkillLevelPipe } from '../../shared/pipes/skill-level-pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChipsComponent, SkillLevelPipe, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  searchTerm = new FormControl('');

  frontendSkills = signal(FRONT_END_SKILLS);

  technologies = signal(TECHNOLOGIES);

  constructor() {
    this.searchTerm.valueChanges.pipe(
      startWith(''),
    ).subscribe((term: string | null) => {
      const filteredTechnologies = TECHNOLOGIES.filter((tech) =>
        tech.toLowerCase().includes((term ?? '').toLowerCase())
      );
      this.technologies.set(filteredTechnologies);
    });
  }

  clearSearch(): void {
    this.searchTerm.setValue('');
  }

}