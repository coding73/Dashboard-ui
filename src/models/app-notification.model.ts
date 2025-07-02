import { SweetAlertOptions } from "sweetalert2";

/**
 * User to send and receive notification from library and the app.
 */
export interface AppNotification {

  /**
   * Displays a message in the app
   *
   * @param msg Message to show
   * @param title Title of the message
   * @param duration Duration of the message
   */
  showMessage(msg: string, title?: string, duration?: number): void;

  /**
   * Displays a spinner in the application
   *
   * @param blocking `true` if spinner blocks all other actions
   */
  showSpinner(blocking?: boolean): void;

  /**
   * Hides a current active spinner.
   */
  hideSpinner(): void;


  /**
   * Displays a Sweet Alert popup in the app
   * @param options A list of Sweet Alert options - as to how the popup should be displayed.
   */
  showSweetAlert(options: SweetAlertOptions): Promise<any>;

}
