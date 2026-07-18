import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-icon',
  imports: [],
  templateUrl: './tech-icon.html',
  styleUrl: './tech-icon.scss',
})
export class TechIcon {
  @Input() name!: string;
  @Input() class!: string;

}
