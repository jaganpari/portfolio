import { Injectable, inject } from '@angular/core';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);

  getProjects() {
    return this.http.get<Project[]>('data/project.json');
  }
  
}
