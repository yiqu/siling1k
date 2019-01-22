import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { SilingEditable, SilingBankType } from '../../shared/models/editable.model';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from "@angular/forms"
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../service/admin.service';
import { AboutService } from '../../service/about.service';

@Component({
  selector: 'admin-add-panel',
  templateUrl: 'add-panel.component.html',
  styleUrls: ['./add-panel.component.css', '../../app.component.css',
    '../../shared/forms/form.component.css']
})

export class PanelAdditionComponent implements OnInit {

  silingFormGroup: FormGroup;
  silingFormObj: any;
  silingTypes: SilingBankType[] = [
    new SilingBankType("Fidelity", "Fidelity"),
    new SilingBankType("Empower", "Empower"),
    new SilingBankType("Ascensus", "Ascensus")
  ]

  constructor(public ts: TitleService, public router: Router, public route: ActivatedRoute,
    public as: AdminService, public abs: AboutService, public fb: FormBuilder) {
  }

  ngOnInit() {
    this.setPageTitle();
    this.createSilingEntryFG();
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
      "date": this.abs.createNewFormControl("1/1/2019", false, [Validators.required]),
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