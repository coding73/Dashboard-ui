import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppRoutes } from '@app/constants';
import { RouteQueryParams, PartialData } from '@app/models';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class DefaultRouteConfigService  {
  readonly authGuardFailedPath: string= '/auth';
  readonly noAuthGuardFailedPath: string= '/app/home';

  constructor(
    private router: Router
  ) { }

  /**
   * Routes the app to the specific url
   */
  private route(url: string, queryParams?: RouteQueryParams, openInNewTab?: boolean): void {

    if (openInNewTab) {

      this.newTab(url, queryParams);

    } else {
      this.router.navigate([url], { queryParams });
    }
  }

  /**
   * Opens the url in new tab
   */
  private newTab(url: string, queryParams?: RouteQueryParams): void {

    const useHash = environment.domain === 'https://apmc.devkalgudi.com';

    const routeUrl = this.router.serializeUrl(this.router.createUrlTree([url], { queryParams }));
    window.open(`${useHash ? '#' : ''}${routeUrl}`, '_blank');
  }

  toLogin(params?: PartialData, queryParams?: RouteQueryParams): string {
    const url = AppRoutes.AUTH_LOGIN;

    this.route(url, queryParams);

    return url;
  }

  onGuardSuccess(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void { }

  onAuthGuardFailure(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {

    // Route to the auth guard failed path if configured
    if (this.authGuardFailedPath) {
      this.route(this.authGuardFailedPath);
    }
  }

  onNoAuthGuardFailure(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {

    // Route to the no auth guard failed path if configured
    if (this.noAuthGuardFailedPath) {
      this.route(this.noAuthGuardFailedPath);
    }
  }

  toHome(params?: PartialData, queryParams?: RouteQueryParams): string {

    const url = AppRoutes.APP_HOME;

    this.route(url, queryParams);

    return url;
  }
}
