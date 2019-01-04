import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';
import { MarketIndex } from '../../shared/models/market-index.model';
import { CanComponentDeactivate } from './about-new-deactivate-guard.service';
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms"
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { DataResponse } from '../../shared/models/data.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'about-new',
  templateUrl: 'about-new.component.html',
  styleUrls: ['./about-new.component.css']
})

export class AboutCreationComponent implements OnInit, CanComponentDeactivate {

  currentEntryName: string = "FTSE 100";
  currentEntryId: string = "ftse100";
  currentEntryDescription: string = "The Financial Times Stock Exchange 100 Index.";
  entrySubmitted: boolean = false;
  newFormObj: MarketIndex[];

  constructor(public as: AboutService, public route: ActivatedRoute) {

  }

  ngOnInit() { 
    this.route.data.subscribe(
      (resolvedData: HttpResponse<DataResponse>) => {
        this.newFormObj = resolvedData['newFormLayout'].body.items;
        this.createFormGroupForNew();
      }
    );
  }

  onEntrySubmit() {
    let newEntry = new MarketIndex(this.currentEntryId, this.currentEntryDescription, this.currentEntryName);
    this.entrySubmitted = true;
    this.as.addNewEntry(newEntry);
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
    console.log(this.newFormObj);


  }

  onSubmit() {
  
  }
}