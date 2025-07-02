import { Location } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import { inject, Inject, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiError, LazySyncApiError } from '../errors';
import { ApiResponseCommon, ApiResponseCommonV1, AppEnvironmentConfig, AppNotification } from '@app/models';
import { REST_API_ERROR_MESSAGES } from '@app/constants';
import { KL_ENV, KL_NOTIFICATION } from '@app/config';

@Injectable({
  providedIn: 'root'
})
export class AppUtilityService {
  private dataSubject = new BehaviorSubject<any>(null); // Create a BehaviorSubject to hold the data
  sharedData$ = this.dataSubject.asObservable(); // Expose the Observable for subscribing

  get env(): AppEnvironmentConfig {
    return this.injector.get(KL_ENV);
  }

  get notification(): AppNotification {
    return this.injector.get(KL_NOTIFICATION);
  }

  constructor(
    // @Inject(KL_ENV) private env: AppEnvironmentConfig,
    private appLocation: Location,
    private injector: Injector
  ) { }

  /**
   * Converts a JSON object to JSON string.
   *
   * @param json Json object
   *
   * @returns JSON string on success otherwise empty string.
   */
  toString<T>(json: T): string {

    try {
      return JSON.stringify(json);
    } catch (e) {
      return '';
    }
  }

  /**
   * Converts a JSON string to JSON object.
   *
   * @param val Json string
   *
   * @returns JSON object on success otherwise the same object.
   */
  toJson<T>(val: any): T {

    try {
      return JSON.parse(val);
    } catch (e) {
      return val;
    }
  }

  /**
   * Converts a Date format to ISO string format.
   *
   *
   * @returns ISO string format on success.
   */
  toISOString(date: Date): string | Date {

    try {
      return date.toISOString();
    } catch (e) {
      return date;
    }
  }

  /**
   * Deep clones an object
   *
   * @param o Object to clone
   */
  clone<T>(o: T): T {
    return this.toJson<T>(this.toString(o));
  }

  /**
   * Removes special characters
   * @param str
   */
  encodeUri(str: string, replaceWith = '-') {

    str = str.replace(/[\(\)\&-\/\\\%\s]/g, replaceWith)    // Replaces special characters with -
            .replace(/[-]{1,}/g, replaceWith);            // Replaces more than one - with single -

    return str.substr(0, (str.lastIndexOf(replaceWith) === str.length - 1 ? str.length - 1 : str.length))
        .toLowerCase();                         // Convert the uri to lowercase
  }

  /**
   * Displays a message box to the app.
   *
   * @param message Message to show
   * @param duration Duration of message to be visible. Default is 5000
   */
  showMessage(message: string, duration: number = 5000): void {
    this.notification.showMessage(message, '', duration);
  }

  /**
   * Common error handler, shows error message on snack bar.
   */
  errorHandler(msg: any): void {
    console.error(msg);
    this.showMessage(msg);

    this.notification.hideSpinner();
  }

  /**
   * Opens a route url in new tab
   *
   * @param url Url to open
   */
  openRouteInNewTab(url: string, useHash = true): void {

    window.open(`${useHash ? '#' : ''}${url}`, '_blank');
  }

  /**
   * Sets, a json string to local storage. It also ensure encryption
   * of the json string in local storage for production environment.
   * For development environment there is no encoding.
   *
   * @param key Key name in local storage
   * @param obj Json object to store locally
   * @param encode `true` to encode the given json string, otherwise `false`. Default set to `true`
   */
  setToLocal(key: string, obj: object, encode = true): void {

    let jsonString = this.toString(obj);

    // Encode json string if specified
    if (encode) {
      jsonString = this.encodeString(jsonString);
    }

    // Update local storage
    localStorage.setItem(key, jsonString);
  }

  /**
   * Gets a value stored in local storage. It also ensure the proper
   * decoding of the json string.
   *
   * @param key Key name in local storage
   * @param decode `true` to decode the given json string, otherwise `false`. Default set to `true`
   */
  getFromLocal<T>(key: string, decode = true): T {

    let jsonString = localStorage.getItem(key);

    // Decode the json string if decoding enabled
    if (jsonString && decode) {
      jsonString = this.decodeString(jsonString);
    }

    // Parse json string to the object fellow
    return this.toJson<T>(jsonString);
  }

  /**
   * Encodes a string to base64 format
   *
   * @param s String to encode
   */
  encodeString(s: string): string {
    return btoa(s);
  }

  /**
   * Decodes a string from base64 format to normal string
   *
   * @param s String to decode
   */
  decodeString(s: string): string {
    return atob(s);
  }

  /**
   * Checks if a given string is `null`, `undefined` or empty string.
   *
   * @param str String to verify for null
   *
   * @returns `true` if the given string is `null`, `undefined` or empty,
   * otherwise `false`.
   */
  isNullOrEmpty(str: string): boolean {
    return !!(str === null || typeof str === 'undefined' || str.length <= 0);
  }


  /**
   * Scrolls the window to top
   */
  scrollToTop(behavior: 'auto' | 'smooth' = 'smooth', scrollId?: string): void {

    this.scrollTo(0, 0, behavior, scrollId);
  }

  /**
   * Scrolls the window to bottom
   */
  scrollToBottom(behavior: 'auto' | 'smooth' = 'smooth', scrollId?: string): void {

    const elem = scrollId ? document.getElementById(scrollId) : window;

    this.scrollTo((elem as any).scrollHeight, 0, behavior, scrollId);
  }

  /**
   * Scrolls the window to top
   */
  scrollTo(top: number, left: number, behavior: 'auto' | 'smooth' = 'smooth', scrollId?: string): void {

    const elem: any = scrollId ? document.getElementById(scrollId) : window;

    elem.scrollTo({
      top,
      left,
      behavior
    });
  }

  /**
   * Opens a url in new tab
   * @param url Url to open
   */
  openUrl(url: string, target = '_blank'): void {
    window.open(url, target);
  }

  toGoPreviousPage() {
    this.appLocation.back();
  }

  /**
   * Reloads current page
   */
  reload() {
    window.location.reload();
  }

  /**
   * Displays the error message thrown by the API.
   */
  showApiErrorMessage(err: any): void {
    const errorMessage = err.error
      ? err.error.message
      : err.message
        ? err.message
        : err || 'Something went wrong, please try again later!';

    this.errorHandler(errorMessage);
  }

  /**
   * Global common Api error response handler. Use this method to handle api
   * errors globally. It checks if the api response code matches to the success
   * response code or not. It throws an error if the response code does not matches
   * to the success response code.
   *
   * @param res Api response
   * @param successCode Api response success code, default set to `HttpStatusCode.OK` (200)
   * @param errorMessages List of error messages to show, default set to `REST_API_ERROR_MESSAGES`
   *
   * @throws `ApiError` if the api response code does not match the expected success code.
   */
  apiErrorHandler<T extends ApiResponseCommon | ApiResponseCommonV1>(
    res: T,
    successCode: HttpStatusCode = HttpStatusCode.Ok,
    errorMessages: { [key: number]: string } = { ...REST_API_ERROR_MESSAGES }
  ): T {

    // This status is used while caching the request locally
    if (res.code === HttpStatusCode.ExpectationFailed) {
      throw new LazySyncApiError(new Error(errorMessages[res.code]));
    } else if (res.code !== successCode) {
      throw new ApiError(new Error(res.code && errorMessages[res.code] ? errorMessages[res.code] : 'Something went wrong, please try again'));
    }

    // All good, return the response back
    return res;
  }

  /**
   * Generates a random number between a given number
   *
   * @see https://stackoverflow.com/a/7228322/2401088
   */
  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * Checks if the url is absolute or not
   */
  isUrlAbsolute(url: string): boolean {
    return /http(s)?:\/\//.test(url);
  }

  /**
   * Converts a relative url to absolute or if the url is absolute then returns the same
   */
  getAbsoluteUrl(url: string): string {

    return this.isUrlAbsolute(url)
      ? url
      : this.frameAbsoluteUrl(url);
  }

  /**
   * Copies the html elements as text to the clipboard
   * @returns
   */
  copyHTMLToClipboard(elementId: string = 'body'): string {

    var txt: any = document.getElementById(elementId);
    var withMarkup = txt.innerHTML;
    var textOnly = txt.innerText;
    navigator.clipboard.writeText(textOnly).then(res => this.notification.showMessage('Copied to clipboard') ).catch(e => console.error(e));

    return textOnly;
  }

  /**
   * Replaces the base domain in a URL if it matches any domain in the provided list.
   *
   * This function checks if the provided request URL (`reqUrl`) contains a data URL that
   * matches any domain in the `replaceableDomainList`. If a match is found, the function
   * replaces the base domain of the request URL with the `replaceDomain` domain and returns
   * the updated URL. If no match is found, an empty string is returned.
   *
   * @param {string} reqUrl - The request URL to be processed.
   * @param {Array<string>} replaceableDomainList - List of domains to match and replace.
   * @param {string} replaceDomain - The domain to use as a replacement.
   * @returns {string} - The updated URL with the base domain replaced, or an empty string if no match is found.
   */
  replaceBaseDomainForDataUrls(reqUrl: any, replaceableDomainList: any, replaceDomain: any): string {
    // Check if the request URL matches any domain in the replaceableDomainList list.
    const matchedDomain = replaceableDomainList.find((domain: any) => {
      try {
        const domainHost = new URL(domain);
        return reqUrl.includes(`${domainHost.origin}/data/`);
      } catch {
        console.error(`Error with URL parse: Invalid URL present in env config <apDataDomains>`);
        return '';
      }
    });
    if (matchedDomain) {
      const matchedDomainHost = new URL(matchedDomain).host;
      const replaceableDomainHost = new URL(replaceDomain).host;
      const newUrl = reqUrl.replace(matchedDomainHost, replaceableDomainHost);
      return newUrl;
    } else {
      return '';
    }
  }

  /**
   * Frames absolute url from a relative url. Appends the domain url at the
   * beginning of the url.
   */
  private frameAbsoluteUrl(relativeUrl: string): string {

    const isUrlBeginsWithSlash = relativeUrl.indexOf('/') === 0;

    return isUrlBeginsWithSlash
      ? this.env.domain + relativeUrl
      : this.env.domain + '/' + relativeUrl;
  }
}
