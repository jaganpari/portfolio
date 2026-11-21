import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { Component, signal } from '@angular/core';
import { HIGHLIGHTED_TECHNOLOGIES } from '../../core/constants/about.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  highlightedTechnologies = signal(HIGHLIGHTED_TECHNOLOGIES);
}
