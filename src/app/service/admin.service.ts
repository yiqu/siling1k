import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { ToastrService } from 'ngx-toastr';
import { SilingEditable, SilingBankType, EditableSilingDailyData, SilingDailyData } from '../shared/models/editable.model';
import * as _ from 'lodash';
import { FormControl } from '@angular/forms';

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
  public isDailyEditing: boolean = false;

  loadingEditingPanel: boolean = false;
  selectedSilingData: EditableSilingDailyData[] = [];
  selectedSilingData$: Subject<EditableSilingDailyData[]> = new Subject();
  currentSelectedSilingToEdit$: Subject<EditableSilingDailyData> = new Subject();
  editEntryCompleted$: Subject<any> = new Subject();

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

  updateDailyEntry(data) {
    this.isDailyEditing = true;
    let url: string = "items/" + data.silingType + "/" + data.entryId + ".json";
    this.ds.postData(data, url).subscribe(
      (res: HttpResponse<any>) => {
        if (res.status === 200) {
          this.ts.success("Successfully updated daily entry for " +
            res.body.date + ".", "Updated")
        }
      },
      (err) => {
        this.isDailyEditing = false;
      },
      () => {
        this.isDailyEditing = false;
        this.editEntryCompleted$.next(true);
      }
    );
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

  /**
   * Custom validator to check if it is a valid daily entry format
   * 12.12 - yes
   * 12.12.1 - no
   * 12 - yes
   * 12.123 -no
   * @param control 
   */
  dailyEntryDollarFormat(control: FormControl): {[s: string]:boolean} {
    let format = /^\d+(\.\d{1,2})?$/;
    if (!(""+control.value).match(format)) {
      return {'entryFormatError': true};
    } 
    return null;
  }
}