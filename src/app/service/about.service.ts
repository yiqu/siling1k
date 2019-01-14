import { Injectable, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DataService } from './data.service';
import { DataResponse, ItemDetail } from '../shared/models/data.model';
import { HttpResponse } from '@angular/common/http';
import { MarketIndex } from '../shared/models/market-index.model';
import { AboutItem } from '../shared/models/data.model';
import { Subject } from "rxjs";
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';

@Injectable()
export class AboutService {

  aboutItems: AboutItem[] = [];
  inMemoryAddedItems: AboutItem[] = []; // Since there is no backend, temp. store newly added entries here
  newMarketIndexFormObj: MarketIndex[] = [];

  allAboutDataSubj: Subject<AboutItem[]> = new Subject();
  singleAboutDataSubj: Subject<AboutItem> = new Subject();
  isAboutLoading: Subject<boolean> = new Subject<boolean>();

  marketIndexFormObjSub: Subscription = new Subscription();
  getAboutDataSub: Subscription = new Subscription();

  constructor(public ds: DataService, public router: Router, public route: ActivatedRoute,
    public fb: FormBuilder, public ts: ToastrService) {
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

  getNewMarketIndexFormObj() {
    this.marketIndexFormObjSub.unsubscribe();
    this.marketIndexFormObjSub = this.ds.getMarketIndexForm$().subscribe(
      (data: HttpResponse<DataResponse>) => {
        this.newMarketIndexFormObj = data.body.items;
      },
      (error) => {
      },
      () => {
        //console.log(this.newMarketIndexFormObj)
      }
    )
  }

  /**
   * Mock a backend server with In Memory List. This list will be
   * concat'd whenever retrieving all about items.
   * @param entry 
   */
  addNewEntry(entry: AboutItem) {
    console.log(entry, entry.id);
    this.ts.success("Entry successfully added.", "Success");
    this.inMemoryAddedItems.push(entry);
    this.router.navigate(['../about', entry.id], {relativeTo: this.route});
  }

  createNewMarketIndexMetaFG(objData): FormGroup {
    console.log("Data:",objData)
    let fgObject = {
      "title": this.createNewFormControl(objData['title'].value, 
        false, 
        this.getValidators(objData['title'].required)),
      "id": this.createNewFormControl(objData['id'].value, 
        false, 
        this.getValidators(objData['id'].required)),
      "description": this.createNewFormControl(objData['description'].value, 
        false, 
        this.getValidators(objData['description'].required))
    };
    fgObject['facts'] = this.createFormFactsObj(objData['facts']);
    return this.fb.group(fgObject);
  }

  createFormFactsObj(factObj): FormArray {
    let fga = new FormArray([]);
    for (let fact of factObj.value) {
      let fg = new FormGroup({
        "text": this.createNewFormControl(fact['text'].value, 
          false, 
          this.getValidators(fact['text'].required)),
        "author": this.createNewFormControl(fact['author'].value, 
          false, 
          this.getValidators(fact['author'].required))
      });
      fga.push(fg);
    }
    return fga;
  }

  getValidators(req: boolean) {
    let validatorList = [];
    if (req) {
      validatorList.push(Validators.required);
    }
    return validatorList;
  }

  createNewFormControl(value: string, disabled: boolean = false, validators?: any[]) {
    return new FormControl({
      value: value,
      disabled: disabled
    }, validators ? validators : null);
  }
}