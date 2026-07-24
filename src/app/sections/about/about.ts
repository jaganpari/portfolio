import { Component, signal } from '@angular/core';
import { HIGHLIGHTED_TECHNOLOGIES } from '../../core/constants/about.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  highlightedTechnologies = signal(HIGHLIGHTED_TECHNOLOGIES);
}
