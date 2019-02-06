import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { ToastrService } from 'ngx-toastr';
import { SilingEditable, SilingBankType } from '../shared/models/editable.model';

@Injectable()
export class AdminService {

  public silingTypes: SilingBankType[] = [
    new SilingBankType("Fidelity", "Fidelity"),
    new SilingBankType("Empower", "Empower"),
    new SilingBankType("Ascensus", "Ascensus")
  ];

  userToken: string = "1";

  public isDailyPosting: boolean = false;
  public savingDailyEntry$: Subscription = new Subscription();
  public addedEntryName: string;
  public onSaveComplete$: Subject<string> = new Subject<string>();

  loadingEditingPanel: boolean = false;

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

  getDataForSinglePanel(silingId: string) {
    this.loadingEditingPanel = true;
    this.ds.getSinglePanelData(silingId).subscribe(
      (res: HttpResponse<any>) => {
        console.log(res)
      },
      (error) => {
        this.loadingEditingPanel = false;
      },
      () => {
        this.loadingEditingPanel = false;
      }
    )
  }
}