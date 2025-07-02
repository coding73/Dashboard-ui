import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from '../../ag-grid';
import { map, Observable } from 'rxjs';
import { ApiResponseCommon } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  /**
     * `api/v2/tms/dashboard/flight`
     */
    private readonly APP_flight_creation = `http://localhost:8080/api/v2/tms/dashboard/flight`;

    constructor(
      private httpClient: HttpClient,
      private util: UtilService
    ) { }

  /**
   * create flight
   */
  public createFlight(payload: any): Observable<any> {

    return this.httpClient.post<ApiResponseCommon>(this.APP_flight_creation, payload)
      .pipe(

        // Api response error handler
        map(res => this.util.apiErrorHandler(res, HttpStatusCode.Created, { 401: res.info })),

        map(res => res)
      );
  }
}
