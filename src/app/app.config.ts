import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors} from '@angular/common/http';
import { appHttpInterceptor } from './core/interceptors';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AG_GRID_CURRENCY_FORMATTER, AG_GRID_DATE_FORMATTER, APP_CONFIG, KL_ENV, KL_NOTIFICATION, KL_ROUTE_CONFIG, STORE_ADMIN_CONFIG } from './config';
import { StoreType } from '@app/models';

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const provideTranslation = () => ({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom([TranslateModule.forRoot(provideTranslation())]),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideHttpClient(withInterceptors([appHttpInterceptor])),
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: KL_ENV, useClass: APP_CONFIG.environment },
    { provide: KL_NOTIFICATION, useClass: APP_CONFIG.notification },
    { provide: KL_ROUTE_CONFIG, useClass: APP_CONFIG.routeConfig},
    { provide: STORE_ADMIN_CONFIG, useValue: StoreType.FARM_STORE},
    { provide: AG_GRID_DATE_FORMATTER, useClass: APP_CONFIG.dateFormatter},
    { provide: AG_GRID_CURRENCY_FORMATTER, useClass: APP_CONFIG.currencyFormatter},
    // Set date locale to en-GB
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]
};
