import { AppCoreRouteConfig, PartialData, RouteQueryParams } from '@app/models';

/**
 * Defines route configuration for the App library.
 * Route configuration is defined by the application which later injected
 * to the library.
 *
 * Kalgudi core library uses this route configuration for navigation.
 *
 * All the below declared methods accepts two optional parameters params and queryParams
 * and returns string. The returned string is the route url.
 */
export interface AppAuthRouteConfig extends AppCoreRouteConfig {

  /**
   * Routes app to the login page
   */
  toLogin(params?: PartialData, queryParams?: RouteQueryParams): string;
  /**
   * Routes app to the signup page
   */
  // toSignup(params?: PartialData, queryParams?: RouteQueryParams): string;
  /**
   * Routes app to the reset password page
   */
  // toResetPassword(params?: PartialData, queryParams?: RouteQueryParams): string;
  /**
   * Routes app to the verify otp page
   */
  // toVerifyOtp(params?: PartialData, queryParams?: RouteQueryParams): string;
}
