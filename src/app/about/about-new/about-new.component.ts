import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';
import { MarketIndex } from '../../shared/models/market-index.model';
import { CanComponentDeactivate } from './about-new-deactivate-guard.service';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from "@angular/forms"
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { DataResponse, AboutItem } from '../../shared/models/data.model';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

const newEntryImg: string = "assets/images/marketindex.jpg";

@Component({
  selector: 'about-new',
  templateUrl: 'about-new.component.html',
  styleUrls: ['./about-new.component.css']
})

export class AboutCreationComponent implements OnInit, CanComponentDeactivate {

  currentEntryName: string = "FTSE 100";
  currentEntryId: string = "ftse100";
  currentEntryDescription: string = "The Financial Times Stock Exchange 100 Index.";
  newEntryImg: string = "assets/images/marketindex.jpg";
  entrySubmitted: boolean = false;
  newFormObj: MarketIndex[];
  newFormFg: FormGroup;

  constructor(public as: AboutService, public route: ActivatedRoute, 
    public fb: FormBuilder, public ts: ToastrService) {

  }

  ngOnInit() { 
    this.route.data.subscribe(
      (resolvedData: HttpResponse<DataResponse>) => {
        this.newFormObj = resolvedData['newFormLayout'].body.items;
        //console.log("whole: ",this.newFormObj)
        this.createFormGroupForNew();
      }
    );
  }

  onSubmit() {
    let submitCount: number = 0;
    submitCount = this.newFormFg.value['dataArray'].length;
    console.log("count" + submitCount);
    this.entrySubmitted = true;
    if (submitCount > 0) {
      this.ts.info("Adding " + submitCount + " entries.", "Info.");
      for (let marketIndex of this.newFormFg.value['dataArray']) {
        this.as.addNewEntry(marketIndex);
      }
    }
  }

  /**
   * Can deactivate only after entrySubmitted flag is true
   */
  canDeactivate(): Observable<boolean> | boolean {
    if (this.entrySubmitted) {
      return true;
    } 
    return confirm("Do you want to discard the changes?");
  }

  createFormGroupForNew() {
    let newMarketIndexFgArray: FormArray = new FormArray([]);
    for (let i=0; i<this.newFormObj.length; i++) {
      let formObj = this.newFormObj[i];
      let firstLevelFg = this.as.createNewMarketIndexMetaFG(formObj);
      newMarketIndexFgArray.push(firstLevelFg);
    }
    
    this.newFormFg = this.fb.group({
      "dataArray": newMarketIndexFgArray
    });

    //console.log(this.newFormFg)
  }

  getObjectKeys(obj: any): string[] {
    let keys = Object.keys(obj);
    return keys;
  }

  isObjectArray(key, obj): boolean {
    return obj[key].value instanceof Array;
  }

}