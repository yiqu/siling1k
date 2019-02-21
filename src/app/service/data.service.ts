import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, timeout, retry, retryWhen, delayWhen, tap, take } from 'rxjs/operators';
import { timer } from 'rxjs';
import { HttpErrorHandler, HandleError } from './error-handler.service';
import { environment } from '../../environments/environment';
import { DataResponse, ItemDetail } from '../shared/models/data.model';
import { IRequestOptions } from '../shared/models/IRequestOptions.model';
import { SilingEditable, SilingDailyData } from '../shared/models/editable.model';
import { ToastrService } from 'ngx-toastr';


const headers = new HttpHeaders({
  'Content-Type':  'application/json',
  'Authorization': 'my-auth-token'
});


@Injectable()
export class DataService {

  private baseUrl: string = "assets/";
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler, public ts: ToastrService) { 
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

  saveDailySilingEntry(data: SilingEditable): Observable<HttpResponse<any>> {
    let url: string = this.getBaseUrl() + "items" + "/" + data.silingType + ".json";
    const dataToPost = new SilingDailyData(data.date, +data.balance);
    return this.http.post<any>(url, dataToPost, {headers: headers, observe: 'response', 
      responseType: "json"}).pipe(
        //delay(3000)
      );
  }

  getSinglePanelData(silingId: string): Observable<HttpResponse<any>> {
    let url: string = this.getBaseUrl() + "items" + "/" + silingId + ".json";
    return this.http.get<HttpResponse<any>>(url, {headers: headers, observe: 'response', responseType: 'json'});
  }

  /**
   * PUT request. 
   * With timeout of 4 seconds, if error occured, retries every 2 seconds for 5 times, then gives up.
   * 
   * @param dataToPost 
   * @param postUrl 
   */
  postData(dataToPost: any, postUrl: string) {
    //https://kq-1-1a499.firebaseio.com/panel/items/Ascensus/-LWn2B0H-JYgBLa8rXSe.json
    let url: string = this.getBaseUrl() + postUrl;
    return this.http.put<any>(url, dataToPost.data, {headers: headers, observe: 'response', responseType: 'json'}).
      pipe(
        timeout(4000),
        retryWhen(errors => {
          let errorCount = 0;
          return errors.pipe(
            delayWhen(() => timer(2000)),
            take(5),
            tap((res) => {
              errorCount += 1;
              this.ts.error("Error: " + res.message + ". <br>Retrying now. (" +errorCount+")/5" , "Error")
            })
          );
        }),
      )
  }

  /**
   * DELETE request
   * @param deleteUrl 
   */
  deleteData(deleteUrl: string) {
    let url: string = this.getBaseUrl() + deleteUrl;
    return this.http.delete(url, {headers: headers, observe: 'response', responseType: 'json'}).
      pipe(
        timeout(4000)
      )
  }

  /**
   * Construct URL based on Prod/Dev mode
   */
  getBaseUrl(): string {
    return environment.production ? "https://siling1k.firebaseio.com/panel/" : "https://kq-1-1a499.firebaseio.com/panel2/"
  }
}