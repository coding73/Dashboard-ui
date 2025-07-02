import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PartialData } from './core.model';
import { RouteQueryParams } from './common.model';

/**
 * Defines route configuration for the App library.
 * Route configuration is defined by the application which later injected
 * to the library.
 *
 * App core library uses this route configuration for navigation.
 *
 * All the below declared methods accepts two optional parameters params and queryParams
 * and returns string. The returned string is the route url.
 */
export interface AppCoreRouteConfig {
  /**
   * Absolute route for the invalid routes
   */
  readonly pageNotFoundPath?: string;
  /**
   * Absolute default route for routes blocked by auth guards
   */
  readonly authGuardFailedPath?: string;
  /**
   * Absolute default route for routes blocked by no auth guards
   */
  readonly noAuthGuardFailedPath?: string;
  /**
   * Method called by the auth guards on success route.
   */
  onGuardSuccess(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void;
  /**
   * Method called by auth guards on failed route.
   */
  onAuthGuardFailure(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void;
  /**
   * Method called by auth guards on failed route.
   */
  onNoAuthGuardFailure(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void;

  /**
   * Routes app to the home page
   */
  toHome(params?: PartialData, queryParams?: RouteQueryParams): string;
}
