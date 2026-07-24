import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private http = inject(HttpClient);

  getExperiences() {
    return this.http.get<Experience[]>('data/experience.json');
  }
}
