import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppNotification } from '@app/models';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { AppSpinnerService } from '../../shared/services/app-spinner.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsConfigService implements AppNotification {
  private spinner = inject(AppSpinnerService);
  private snackBar = inject(MatSnackBar);

  constructor() { }

  showMessage(msg: string, action?: string, duration: number = 5000): void {
    this.snackBar.open(msg, 'X', {
      duration,
    });
  }

  /**
   * Displays a Sweet Alert popup in the app
   * @param options A list of Sweet Alert options - as to how the popup should be displayed.
   */
  async showSweetAlert(options: SweetAlertOptions):Promise<any> {
    const response =  await Swal.fire(options);
    return new Promise ((resolve, reject) => {
      resolve(response)
    });
  }

  showSpinner(blocking?: boolean): void {
    this.spinner.toggleSpinner(true);
  }

  hideSpinner(): void {
    this.spinner.toggleSpinner(false);
  }

}
