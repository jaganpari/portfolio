import { Component, AfterViewInit, DestroyRef, inject, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Experiences } from './sections/experience/experience';
import { Contact } from './sections/contact/contact';
import { Certifications } from './sections/certification/certification';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, Home, About, Skills, Projects, Experiences, Certifications, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  readonly activeSection = signal('home');
  private observer!: IntersectionObserver;
  private destroyRef = inject(DestroyRef);

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) this.activeSection.set(entry.target.id);
      });
    }, { rootMargin: '-100px 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('main > section').forEach(section => this.observer.observe(section));
    this.destroyRef.onDestroy(() => this.observer.disconnect());
  }

  scrollTo(sectionId: string) {
    this.activeSection.set(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}