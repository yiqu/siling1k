import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DataService } from './data.service';
import { DataResponse, ItemDetail } from '../shared/models/data.model';
import { HttpResponse } from '@angular/common/http';
import { MarketIndex, MarketIndeFact } from '../shared/models/market-index.model';
import { Subject } from "rxjs";
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from "@angular/forms"
import * as _ from 'lodash';

@Injectable()
export class AboutService {

  aboutItems: MarketIndex[] = [];
  inMemoryAddedItems: MarketIndex[] = []; // Since there is no backend, temp. store newly added entries here

  allAboutDataSubj: Subject<MarketIndex[]> = new Subject();
  singleAboutDataSubj: Subject<MarketIndex> = new Subject();
  isAboutLoading: Subject<boolean> = new Subject<boolean>();

  getAboutDataSub: Subscription = new Subscription();

  constructor(public ds: DataService, public router: Router, public route: ActivatedRoute,
    public fb: FormBuilder) {
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
        let item: MarketIndex = _.find(this.aboutItems.concat(this.inMemoryAddedItems), ['id', itemId]);
        
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
  addNewEntry(entry: MarketIndex) {
    this.inMemoryAddedItems.push(entry);
    this.router.navigate(['../about', entry.getId()], {relativeTo: this.route});
  }

  createNewMarketIndexMetaFG(): FormGroup {
    let fgObject = {
      "name": this.createNewFormControl("", false),
      "id": this.createNewFormControl("", false),
      "description": this.createNewFormControl("Description here..", false),
      "facts": this.fb.array(
        [
          this.createNewMarketIndexFactControl()
        ]
      )
    };
    return this.fb.group(fgObject);
  }

  createNewMarketIndexFactControl(): FormGroup {
    let fgObject = {
      "text": this.createNewFormControl("Fact description..."),
      "author": this.createNewFormControl("")
    }
    return this.fb.group(fgObject);
  }

  createNewFormControl(value: string, disabled: boolean = false, validators?: any[]) {
    return new FormControl({
      value: value,
      disabled: disabled
    }, validators ? validators : null);
  }
}