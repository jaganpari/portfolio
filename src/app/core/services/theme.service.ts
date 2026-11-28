
import { Injectable, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme = signal<Theme>('light');
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  constructor(
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('portfolio-theme');

      this.currentTheme.set(
        savedTheme === 'dark' ? 'dark' : 'light'
      );

      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.currentTheme.update(theme =>
      theme === 'light' ? 'dark' : 'light'
    );

    this.applyTheme();
  }

  private applyTheme(): void {
    const theme = this.currentTheme();

    this.document.body.classList.toggle(
      'dark',
      theme === 'dark'
    );

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('portfolio-theme', theme);
    }
  }
}
