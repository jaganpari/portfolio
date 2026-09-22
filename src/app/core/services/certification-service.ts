import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certification } from '../models/certification';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  private http = inject(HttpClient);

  getCertifications() {
    return this.http.get<Certification[]>('data/certification.json');
  }
}
