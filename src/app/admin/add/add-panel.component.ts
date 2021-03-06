import { Component, OnInit, OnDestroy } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { SilingEditable, SilingBankType } from '../../shared/models/editable.model';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from "@angular/forms"
import { Observable, Subscribable, Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../service/admin.service';
import { AboutService } from '../../service/about.service';
import * as moment from 'moment';

@Component({
  selector: 'admin-add-panel',
  templateUrl: 'add-panel.component.html',
  styleUrls: ['./add-panel.component.css', '../../app.component.css',
    '../../shared/forms/form.component.css']
})

export class PanelAdditionComponent implements OnInit, OnDestroy {

  silingFormGroup: FormGroup;
  silingFormObj: any;
  onSaveCompleteSub$: Subscription = new Subscription();
  todayDate: any;

  constructor(public ts: TitleService, public router: Router, public route: ActivatedRoute,
    public as: AdminService, public abs: AboutService, public fb: FormBuilder) {
      this.todayDate = (moment(this.todayDate).subtract(1, 'day').format("MM/DD/YYYY"));
  }

  ngOnInit() {
    this.setPageTitle();
    this.createSilingEntryFG();
    this.onSaveCompleteSub$ = this.as.onSaveComplete$.subscribe(
      (savedId: string) => {
        this.router.navigate(['../'], {relativeTo: this.route, 
          queryParams:{ 'lastAction': "dailyPanel", 
            "panelId": savedId,
            "silingId": this.silingFormGroup.get("silingType").value }});
      }
    );
  } 

  ngOnDestroy() {
    this.onSaveCompleteSub$.unsubscribe();
  }

  setPageTitle() {
    this.route.data.subscribe(
      (data: Data) => {
        this.ts.setPageTitle(data.title);
      }
    );
  }

  createSilingEntryFG() {
    this.silingFormObj = {
      "silingType": this.abs.createNewFormControl("Fidelity", false, [Validators.required]),
      "date": this.abs.createNewFormControl(this.todayDate, false, [Validators.required]),
      "balance": this.abs.createNewFormControl("0.00", false, [Validators.required])
    }
    this.silingFormGroup = this.fb.group(this.silingFormObj);
  }

  onSubmit() {
    const silingEntry: SilingEditable = this.silingFormGroup.getRawValue();
    this.as.saveNewDailySiling(silingEntry);
  }

  getObjectKeys(obj: any): string[] {
    let keys = Object.keys(obj);
    return keys;
  }
}