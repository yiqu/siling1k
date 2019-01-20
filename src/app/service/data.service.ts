import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
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

  getAllData2$(): Observable<DataResponse> {
    let url: string = this.getBaseUrl()+ "items.json";
    return this.http.get<HttpResponse<any>>(url, {headers: headers, observe: 'response', 
      responseType: "json"})
      .pipe(
        map(
          (res: HttpResponse<any>) => {
            let itemsData = res.body;
            Object.keys(itemsData).map(
              (val) => {
                let dataArray = [];
                Object.keys(itemsData[val]).map(
                  (val2) => {
                    dataArray.push(itemsData[val][val2])
                  }
                )
                itemsData[val] = dataArray;
              }
            )
            const dataResponse: DataResponse = {
              items: itemsData,
              total_count: 1
            }
            return dataResponse;
          }
        )
      )
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
  getBaseUrl(): string {
    return environment.production ? "https://siling1k.firebaseio.com/panel/" : "https://kq-1-1a499.firebaseio.com/"
  }
}