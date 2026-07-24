import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../core/services/experience-service';
import { Experience } from '../../core/models/experience.model';
import { ChipsComponent } from '../../shared/ui/chips-component/chips-component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ChipsComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experiences implements OnInit {

  private experienceService = inject(ExperienceService);

  experiences = signal<Experience[]>([]);

  ngOnInit() {
    this.experienceService.getExperiences()
      .subscribe((data) => {
        this.experiences.set(data);
      });
  }

}