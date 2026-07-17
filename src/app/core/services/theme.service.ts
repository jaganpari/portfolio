import {
  Injectable,
  signal,
  effect
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode = signal(false);

  constructor(){

    effect(()=>{

      document.body.classList.toggle(
        'dark',
        this.darkMode()
      );

    });

  }

  toggle(){

    this.darkMode.update(v=>!v);

  }

}