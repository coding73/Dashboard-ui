import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from 'src/app/core/services/theme.service';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private themeService: ThemeService,
    private translate: TranslateService,
    private appService: AppService
  ) {
    this.matIconRegistry.addSvgIcon('log-out',this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svgs/log-out.svg'));
  }

  /**
   * Method to logout
   */
  logout() {
    this.appService.logout(true)
  }

  /**
   * Method to change color
   * @param color 
   */
  changeColor(color: string) {
    this.themeService.applyTheme(color);
  }

  /**
   * Method to change language
   * @param lang 
   */
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
