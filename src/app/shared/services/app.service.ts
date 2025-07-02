import { Injectable, inject, signal } from '@angular/core';
import { AppUser, AppUserBasicDetails, AuthDetails, AuthLoginResponse, LoginCredentials } from '@app/models';
import { AppUtilityService } from 'src/app/core/services/app-utility.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  private util: AppUtilityService = inject(AppUtilityService);

  /**
   * Local storage key to store login credentials
   */
  private readonly localStorageLoginCredentialsKey = 'c';
  private readonly localStorageAuthTokenKey = 'tk';

  /**
   * Local storage profile key
   */
  private readonly localStorageProfileKey = 'pf';

  private readonly loginSignal = signal<boolean>(this.loggedIn);
  private readonly profileSignal = signal<AppUser | null>(this.profileLocal);

  private readonly authTokenSignal = signal<AuthDetails | null>(this.authToken);
  private readonly authTokenRefreshingSignal = signal<boolean>(false);

  constructor() { 
  }

  /**
   * Checks is a user is currently logged in or not. A user
   * if logged in if his login credentials exists in the local storage.
   *
   * @returns `true` if user is logged in otherwise `false`
   */
  get loggedIn(): boolean {
    // Get credentials stored in local storage
    const credentials = this.util.getFromLocal<LoginCredentials>(this.localStorageLoginCredentialsKey);

    // Validate user credentials
    return !!(credentials && this.isValidCredentials(credentials));
  }

  /**
   * Gets, the logged in user auth token.
   */
  get authToken(): AuthDetails {
    return this.util.getFromLocal<AuthDetails>(this.localStorageAuthTokenKey, true);
  }

  /**
   * Gets, logged in kalgudi user profile stored in local storage.
   */
  get profileLocal(): AppUser {
    return this.util.getFromLocal<AppUser>(this.localStorageProfileKey, false);
  }

  /**
   * Logged in user login credentials. Login credentials are stored in
   * base 64 encoded format in local storage.
   */
  get loginCredentials(): LoginCredentials {
    return this.util.getFromLocal<LoginCredentials>(this.localStorageLoginCredentialsKey);
  }

  /**
   * Checks if login credentials is valid or not. A valid login
   * credentials must have `mobileNo` and `password`.
   */
  private isValidCredentials(credentials: LoginCredentials): boolean {

    return (
      !this.util.isNullOrEmpty(credentials.userName)
    );
  }

  /**
   * Handles successful login response. It stores the login credentials to
   * local storage. It parses the login response and returns back the parsed login
   * response.
   *
   * @param req Login request payload
   * @param res Login response from API
   */
  private updateCredentialsCache(req: Partial<LoginCredentials>, res: AuthLoginResponse): AppUserBasicDetails {
    // Update mobile number
    req.userName = res.auth.userName;

    /**
     * With new workflow we don't need to store user password locally
     * Please do not store password without consulting technical managers
     */
    // req.password = this.util.decodeString(req.password);
    delete req.password;

    // Store login credentials to local storage
    this.util.setToLocal(this.localStorageLoginCredentialsKey, req);

    // Update the auth token received from login
    this.updateAuthTokenCache(res.auth);

    // Return the short profile response sent by the login service
    return res.userBasicDetail;
  }

  /**
   * Sets, the latest auth token to the local storage.
   */
  private updateAuthTokenCache(token: AuthDetails): void {

    // Update token in local storage
    this.util.setToLocal(this.localStorageAuthTokenKey, token, true);

    // Update token in the stream
    this.authTokenSignal.set(token);
  }

  /**
   * Updates the memory cache and local storage with the specified kalgudi
   * user profile details.
   *
   * On successful update it fire back an event `$profileUpdated`
   *
   * @param profile Updated user profile of the logged in user
   */
  private updateProfileCache(profile: AppUser): AppUser {

    // Update profile in local storage
    this.util.setToLocal(this.localStorageProfileKey, profile, false);

    // Return back the latest profile details for further processing
    return profile;
  }

  /**
   * Event handler for logout successful operation
   */
  logout(reload = false): void {
    // Remove only the keys this service is responsible for
    localStorage.clear();

    // Reset reactive signals
    this.loginSignal.set(false);
    this.profileSignal.set(null);
    this.authTokenSignal.set(null);

    // Optionally reload the page
    if (reload) {
      this.util.reload();
    }
  }
}
