import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ProjectService } from '../../core/services/project-service';
import { Project } from '../../core/models/project.model';
import { ChipsComponent } from '../../shared/ui/chips-component/chips-component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ChipsComponent
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {

  private projectService = inject(ProjectService);
  projects = signal<Project[]>([]);

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe((data: Project[]) => {
        this.projects.set(data);
      });
  }

}