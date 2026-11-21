import { Component, model, signal, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NAV_ITEMS } from '../../core/constants/nav.constants';
import { LanguageService } from '../../core/services/language.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  navItems = signal(NAV_ITEMS);
  activeSection = model.required<string>();
  menuOpen = signal(false);
  readonly language = inject(LanguageService);

  onNavClick(sectionId: string) {
    this.activeSection.set(sectionId);
    this.menuOpen.set(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
  toggleMenu() { this.menuOpen.update(v => !v); }
  toggleLanguage() { this.language.toggleLanguage(); }
}