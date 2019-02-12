import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { ToastrService } from 'ngx-toastr';
import { SilingEditable, SilingBankType, EditableSilingDailyData, SilingDailyData } from '../shared/models/editable.model';
import * as _ from 'lodash';

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
  selectedSilingData: EditableSilingDailyData[] = [];
  selectedSilingData$: Subject<EditableSilingDailyData[]> = new Subject();
  currentSelectedSilingToEdit$: Subject<EditableSilingDailyData> = new Subject();

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

  getDataForSinglePanel(silingId: string, dateToEdit: string) {
    this.loadingEditingPanel = true;
    this.selectedSilingData.length = 0;
    this.ds.getSinglePanelData(silingId).subscribe(
      (res: HttpResponse<any>) => {
        this.extractDates(res.body, dateToEdit);
      },
      (error) => {
        this.loadingEditingPanel = false;
      },
      () => {
        this.loadingEditingPanel = false;
      }
    )
  }

  extractDates(res: any, dateToEdit: string) {
    _.transform(res, (res, curr, index, arr) => {
      this.selectedSilingData.push(new EditableSilingDailyData(index+"", curr as SilingDailyData));
    });
    this.selectedSilingData$.next(this.selectedSilingData);
    if (dateToEdit) {
      let dataToEdit = _.find(this.selectedSilingData, {"data":{"date":dateToEdit}} );
      this.currentSelectedSilingToEdit$.next(dataToEdit);
    }
  }
}