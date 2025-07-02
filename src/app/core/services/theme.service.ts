import { Injectable } from '@angular/core';
import { THEMES } from '@app/constants'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  applyTheme(name: string) {
    const theme = THEMES[name];
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }

}
