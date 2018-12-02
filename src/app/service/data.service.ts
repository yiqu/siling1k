import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './error-handler.service';
import { DataResponse } from '../shared/models/data.model';
import { environment } from '../../environments/environment';
import { ItemDetail } from '../shared/models/data.model';

@Injectable()
export class DataService {

  private baseUrl: string = "assets/";
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) { 
    this.handleError = httpErrorHandler.createHandleError('DataService');
  }

  getAllData$(): Observable<HttpResponse<DataResponse>> {
    let url: string = this.baseUrl + this.getDataSet();
    return this.http.get<DataResponse>(url, {observe: 'response', responseType: "json"})
      .pipe(
        delay(environment.restDelay)
      );
  }

  /**
   * Construct URL based on Prod/Dev mode
   */
  getDataSet(): string {
    return environment.production ? "data.json" : "dev-data.json";
  }
}