import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSpinnerService {
  private blockingSpinner = signal<boolean>(false);
  private routeLoadingProgress = signal<boolean>(false);

  constructor() { }

  // --------------------------------------------------------
  // #region Getters and Setters
  // --------------------------------------------------------

  /**
   * Gets, the current status of spinner.
   */
  get spinner$(): Signal<boolean> {
    return this.blockingSpinner;
  }

  /**
   * Gets, the current status of route navigation status. Stream
   * contains `true` if the route is currently in navigation phase,
   * otherwise `false`.
   */
  get routeLoadingProgress$(): Signal<boolean> {
    return this.routeLoadingProgress;
  }

  // --------------------------------------------------------
  // #endregion
  // --------------------------------------------------------

  // --------------------------------------------------------
  // #region Private methods
  // --------------------------------------------------------

  /**
   * Toggles the current status of spinner
   */
  toggleSpinner(val: boolean): void {
    this.blockingSpinner.set(val);
  }

  /**
   * Toggles the current status of route navigation progress.
   */
  toggleRouteLoadingProgress(val: boolean): void {
    this.routeLoadingProgress.set(val);
  }

  // --------------------------------------------------------
  // #endregion
  // --------------------------------------------------------
}
