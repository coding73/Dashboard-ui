import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  /**
   * Common rest api error messages
   */
  readonly REST_API_ERROR_MESSAGES = {
    400: 'Server error, please try again later',
    401: 'Please login to continue!',
    500: 'Server error, please try again later',
    501: 'Server error, please try again later',
    502: 'Unable to contact to server, please try again later',
    503: 'Unable to contact server, please try again later',
    504: 'No response from server, please try again later'
  };

  constructor(
    private snackBar: MatSnackBar,
  ) { }

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
    this.snackBar.open(message, '', { duration });
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
  apiErrorHandler(
    res: any,
    successCode: number = 200,
    errorMessages: { [key: number]: string } = { ...this.REST_API_ERROR_MESSAGES }
  ): any {

    const defaultErrorMessage = 'Something went wrong, please try again later.';

    if (res.code !== successCode) {
      throw new Error(res.code ? errorMessages[res.code] || defaultErrorMessage : defaultErrorMessage);
    }

    // All good, return the response back
    return res;
  }
}
