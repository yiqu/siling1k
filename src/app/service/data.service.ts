import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './error-handler.service';
import { environment } from '../../environments/environment';
import { DataResponse, ItemDetail } from '../shared/models/data.model';
import { IRequestOptions } from '../shared/models/IRequestOptions.model';


const headers = new HttpHeaders({
  'Content-Type':  'application/json',
  'Authorization': 'my-auth-token'
});


@Injectable()
export class DataService {

  private baseUrl: string = "assets/";
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) { 
    this.handleError = httpErrorHandler.createHandleError('DataService');
  }

  getAllData$(): Observable<HttpResponse<DataResponse>> {
    let url: string = this.baseUrl + this.getDataSet();
    return this.http.get<DataResponse>(url, {headers: headers, observe: 'response', 
      responseType: "json"})
      .pipe(
        delay(environment.restDelay)
      );
  }

  getAboutData$(): Observable<HttpResponse<DataResponse>> {
    let url: string = this.baseUrl + "about-data.json";
    return this.http.get<DataResponse>(url, {observe: 'response', responseType: "json"})
      .pipe(
        delay(environment.restDelay)
      ); 
  }

  getMarketIndexForm$(): Observable<HttpResponse<DataResponse>> {
    let url: string = this.baseUrl + "new-market-index.json";
    return this.http.get<DataResponse>(url, {observe: 'response', responseType: "json"})
      .pipe(
        delay(environment.shortDelay)
      ); 
  }

  /**
   * Construct URL based on Prod/Dev mode
   */
  getDataSet(): string {
    return environment.production ? "data.json" : "dev-data.json";
  }
}