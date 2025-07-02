import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { KL_ENV } from '@app/config';
import { ApiResponseCommon, AppEnvironmentConfig } from '@app/models';
import { map, Observable } from 'rxjs';
import { UtilService } from '../../ag-grid';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  /**
   * `api/v2/tms/auth/login`
   */
  private readonly APP_LOGIN = `http://localhost:8080/api/v2/tms/auth/login`;

  /**
   * `api/v2/tms/auth/signup`
   */
  private readonly APP_SIGNUP = `http://localhost:8080/api/v2/tms/auth/signup`;

  constructor(
    private httpClient: HttpClient,
    private util: UtilService
  ) { }

  /**
   * Service call for reports download
   */
  public login(params: any): Observable<any> {

    return this.httpClient.get<ApiResponseCommon>(this.APP_LOGIN, { params })
      .pipe(

        // Api response error handler
        map(res => this.util.apiErrorHandler(res, HttpStatusCode.Ok, { 401 : res.info })),

        map(res => res)
      );
  }

  /**
   * signup
   */
  public signup(payload: any): Observable<any> {

    return this.httpClient.post<ApiResponseCommon>(this.APP_SIGNUP, payload)
      .pipe(

        // Api response error handler
        map(res => this.util.apiErrorHandler(res, HttpStatusCode.Created, { 401: res.info })),

        map(res => res)
      );
  }
}
