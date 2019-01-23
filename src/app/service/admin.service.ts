import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { SilingEditable } from '../shared/models/editable.model';
import { DataService } from './data.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AdminService {

  userToken: string = "1";

  public isDailyPosting: boolean = false;
  public savingDailyEntry$: Subscription = new Subscription();
  public addedEntryName: string;
  public onSaveComplete$: Subject<string> = new Subject<string>();

  constructor(public ds: DataService, public ts: ToastrService) {
  }

  saveNewDailySiling(data: SilingEditable) {
    this.isDailyPosting = true;
    this.savingDailyEntry$ = this.ds.saveDailySilingEntry(data).subscribe(
      (res: HttpResponse<any>) => {
        this.addedEntryName = res.body.name;
      },
      (error) => {
        this.isDailyPosting = false;
      },
      () => {
        this.isDailyPosting = false;
        this.ts.success("Successfully added (" + this.addedEntryName.slice(-6) + ").", "Success");
        this.onSaveComplete$.next(this.addedEntryName);
      }
    );
  }
}