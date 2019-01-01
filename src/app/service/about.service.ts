import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DataService } from './data.service';
import { DataResponse, ItemDetail, AboutItem } from '../shared/models/data.model';
import { HttpResponse } from '@angular/common/http';
import { Subject } from "rxjs";
import * as _ from 'lodash';

@Injectable()
export class AboutService {

  aboutItems: AboutItem[] = [];
  inMemoryAddedItems: AboutItem[] = []; // Since there is no backend, temp. store newly added entries here

  allAboutDataSubj: Subject<AboutItem[]> = new Subject();
  singleAboutDataSubj: Subject<AboutItem> = new Subject();
  isAboutLoading: Subject<boolean> = new Subject<boolean>();

  getAboutDataSub: Subscription = new Subscription();

  constructor(public ds: DataService, public router: Router, public route: ActivatedRoute) {
  }

  getAllAboutData() {
    this.ds.getAboutData$().subscribe(
      (data: HttpResponse<DataResponse>) => {
        this.aboutItems = data.body.items;
        this.allAboutDataSubj.next(this.aboutItems.concat(this.inMemoryAddedItems));
      },
      (error) => {
        this.allAboutDataSubj.error("Error getting About data.")
      }
    );
  }

  getSingleAboutData2(itemId: string) {
    this.getAboutDataSub.unsubscribe();
    this.getAboutDataSub = this.ds.getAboutData$().subscribe(
      (data: HttpResponse<DataResponse>) => {
        this.aboutItems = data.body.items;
        this.allAboutDataSubj.next(this.aboutItems.concat(this.inMemoryAddedItems));
        let item: AboutItem = _.find(this.aboutItems.concat(this.inMemoryAddedItems), ['id', itemId]);
        
        this.singleAboutDataSubj.next(item);
      },
      (error) => {
        this.allAboutDataSubj.error("Error getting data for " + itemId);
      }
    );
  }

  /**
   * Mock a backend server with In Memory List. This list will be
   * concat'd whenever retrieving all about items.
   * @param entry 
   */
  addNewEntry(entry: AboutItem) {
    this.inMemoryAddedItems.push(entry);
    this.router.navigate(['../about', entry.getId()], {relativeTo: this.route});
  }
}