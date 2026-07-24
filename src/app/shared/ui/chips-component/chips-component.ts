import { Component, Input } from '@angular/core';
import  { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-chips-component',
  imports: [HighlightDirective],
  templateUrl: './chips-component.html',
  styleUrl: './chips-component.css',
})
export class ChipsComponent {
  @Input() technologies: string[] = [];
}
