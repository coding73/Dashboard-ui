import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatProgressSpinnerModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'APMC-UI';
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {
    this.toggleTheme();
  }

  ngOnInit() {
    this.themeService.applyTheme('green'); // Default
  }

  /**
   * Toggles app theme
   */
  toggleTheme(): void {
    document.body.setAttribute('prefers-color-scheme', this.isDarkTheme ? 'dark' : 'light');
    this.isDarkTheme = !this.isDarkTheme;
  }

}
