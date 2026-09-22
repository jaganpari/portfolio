import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationService } from '../../core/services/certification-service';
import { Certification } from '../../core/models/certification';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certification.html',
  styleUrl: './certification.scss'
})
export class Certifications implements OnInit {

  private certificationService = inject(CertificationService);

  certifications = signal<Certification[]>([]);

  ngOnInit() {
    this.certificationService.getCertifications()
      .subscribe((data) => {
        this.certifications.set(data);
      });
  }

}