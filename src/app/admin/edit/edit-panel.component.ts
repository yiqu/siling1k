import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AboutService } from 'src/app/service/about.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';
import { EditableSilingDailyData } from 'src/app/shared/models/editable.model';

@Component({
  selector: 'admin-edit-panel',
  templateUrl: 'edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})

export class PanelEditComponent implements OnInit {

  currentlyEditing: string;
  currentEditingDateSelect: string[] = [];
  silingDailyData: any[] = [];
  silingTypeToEdit: EditableSilingDailyData;
  dataEditFormGroup: FormGroup;

  emptyBalanceHint: string = "You did not enter a balance to update, if left empty, it will be defaulted to $0.00";
  initEditingValue: any;

  constructor(public as: AdminService, public router: Router, 
    public route: ActivatedRoute, public fb: FormBuilder, public abs: AboutService) {
  }

  get balanceFormControl() { 
    return this.dataEditFormGroup.get('balance'); 
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params) {
          this.currentlyEditing = params["editingId"];
          this.getDateSelection(this.currentlyEditing, params["dateToEdit"]);
        } else {
          this.currentlyEditing = null;
        }
      }
    );

    this.as.selectedSilingData$.subscribe(
      (res: EditableSilingDailyData[]) => {
        this.silingTypeToEdit = undefined;
        this.silingDailyData = res;
      }
    );

    this.as.currentSelectedSilingToEdit$.subscribe(
      (res: EditableSilingDailyData) => {
        this.silingTypeToEdit = res;
        if (this.silingTypeToEdit) {
          this.createEditDataFg();
          this.initEditingValue = this.silingTypeToEdit.data;
        }
      }
    )
  }

  navigateToSiling(silingId: string) {
    this.router.navigate(['./'], {relativeTo: this.route, 
      queryParams: {editingId: silingId}});
  }

  getDateSelection(editingId: string, dateToEdit: string) {
    this.as.getDataForSinglePanel(editingId, dateToEdit);
  }

  onSilingTypeEditChange() {
    this.router.navigate(['./'], {relativeTo: this.route, queryParamsHandling: "merge", 
      queryParams: {dateToEdit: this.silingTypeToEdit.data.date}})
  }

  createEditDataFg() {
    const originalBal: string = this.silingTypeToEdit.data.balance + "";
    const originalDate: string = this.silingTypeToEdit.data.date
    let fgObj = {
      balance: this.abs.createNewFormControl(originalBal, false, [Validators.required]),
      date: this.abs.createNewFormControl(originalDate, true)
    }
    this.dataEditFormGroup = this.fb.group(fgObj);
    console.log(this.dataEditFormGroup)
  }

  resetEditingBalance() {
    this.dataEditFormGroup.reset(this.initEditingValue);
  }

  onEditSubmit() {
    let rawValue = this.dataEditFormGroup.getRawValue();
    console.log(rawValue)
  }

  getObjectKeys(obj: any): string[] {
    let keys = Object.keys(obj);
    return keys;
  }

  onConfirm() {
    console.log("confirmed")
  }
}