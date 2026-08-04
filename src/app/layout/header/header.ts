import { Component, signal, model } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NAV_ITEMS } from '../../core/constants/nav.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  navItems = signal(NAV_ITEMS);

  activeSection = model.required<string>();

  onNavClick(sectionId: string) {
    this.activeSection.set(sectionId);
  }

}