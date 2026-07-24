import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillLevel',
})
export class SkillLevelPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 90) return 'Expert';
    if (value >= 75) return 'Advanced';
    if (value >= 60) return 'Intermediate';
    if (value >= 40) return 'Beginner';
    return 'Learning';
  }
}
