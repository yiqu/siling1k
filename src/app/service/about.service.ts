import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { DataResponse, ItemDetail, AboutItem } from '../shared/models/data.model';
import { HttpResponse } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()
export class AboutService {

  rawData: AboutItem[] = [];

  @Output() 
  getSingleAboutData$: EventEmitter<AboutItem> = new EventEmitter<AboutItem>();

  constructor(public ds: DataService) {
  }

  getAboutData$(): Observable<HttpResponse<DataResponse>> {
    return this.ds.getAboutData$();
  }

  getSingleAboutData(itemId: string) {
    console.log(itemId);
    this.getAboutData$().subscribe(
      (data: HttpResponse<DataResponse>) => { 
        this.rawData = data.body.items;
        let item: AboutItem = _.find(this.rawData, ['id', itemId]);
        this.getSingleAboutData$.emit(item);
      }
    );

  }
}