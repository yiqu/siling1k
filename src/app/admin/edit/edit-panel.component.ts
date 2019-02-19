import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AboutService } from 'src/app/service/about.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';
import { EditableSilingDailyData, SilingDailyData } from 'src/app/shared/models/editable.model';
import { SilingModalConfig, ModalAction } from '../../shared/models/modal-config.model';
import { ToastrService } from 'ngx-toastr';

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
  dataEditRawValue: any;

  emptyBalanceHint: string = "Enter a new balance. It can not be empty";
  badDollarFormatHint: string = "Balance has to be integers with no more than 2 decimal places.";
  modalConfirmText: string = "";
  initEditingValue: SilingDailyData;
  modalConfig: SilingModalConfig = new SilingModalConfig();

  constructor(public as: AdminService, public router: Router, 
    public route: ActivatedRoute, public fb: FormBuilder, public abs: AboutService,
    public ts: ToastrService) {
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
    );

    this.as.editEntryCompleted$.subscribe(
      (res: boolean) => {
        if (res) {
          this.navigateAfterEditComplete();
        }
      }
    )
  }

  navigateToSiling(silingId: string) {
    this.router.navigate(['./'], 
      {
        relativeTo: this.route, 
        queryParams: {
          editingId: silingId
        }
      }
    );
  }

  getDateSelection(editingId: string, dateToEdit: string) {
    this.as.getDataForSinglePanel(editingId, dateToEdit);
  }

  onSilingTypeEditChange() {
    this.router.navigate(['./'], 
      {
        relativeTo: this.route, 
        queryParamsHandling: "merge", 
        queryParams: {dateToEdit: this.silingTypeToEdit.data.date}
      }
    )
  }

  /**
   * Create form group for editing form.
   * Validators : required and dollar formatting
   */
  createEditDataFg() {
    this.dataEditFormGroup = null;
    const originalBal: string = this.silingTypeToEdit.data.balance + "";
    const originalDate: string = this.silingTypeToEdit.data.date
    let fgObj = {
      balance: this.abs.createNewFormControl(originalBal, false, 
        [Validators.required, this.as.dailyEntryDollarFormat]),
      date: this.abs.createNewFormControl(originalDate, true)
    }
    this.dataEditFormGroup = this.fb.group(fgObj);
  }

  resetEditingBalance() {
    this.dataEditFormGroup.reset(this.initEditingValue);
  }

  onUpdate() {
    this.dataEditRawValue = this.dataEditFormGroup.getRawValue();
    this.dataEditRawValue = this.lintEditData(this.dataEditRawValue);
    this.modalConfirmText = "Are you sure you want to update " + this.currentlyEditing + 
      "'s data on <br><em>" + this.silingTypeToEdit.data.date + 
      "</em><br>from " + this.initEditingValue.balance + " <br>to <b>" + this.dataEditRawValue.balance + "</b>";
    this.modalConfig = new SilingModalConfig("Update Daily Entry", "Update", this.modalConfirmText, ModalAction.UPDATE_ACTION);
  }

  onDelete() {
    this.modalConfirmText = "Are you sure you want to delete this daily entry?";
    this.modalConfig = new SilingModalConfig("Remove Daily Entry", "Delete", this.modalConfirmText, ModalAction.DELETE_ACTION);
  }

  getObjectKeys(obj: any): string[] {
    let keys = Object.keys(obj);
    return keys;
  }

  onConfirm(action: ModalAction) {
    let data: any = {};
    data.silingType = this.currentlyEditing;
    data.entryId = this.silingTypeToEdit.entryId;

    switch (action) {
      case ModalAction.UPDATE_ACTION: {
        data.data = this.dataEditRawValue;
        this.as.updateDailyEntry(data);
        break;
      };
      case ModalAction.DELETE_ACTION: {
        this.as.deleteDailyEntry(data);
        break;
      };
      default: {
        this.ts.warning("No action detected", "Info.");
      }
    }
  }

  navigateAfterEditComplete() {
    this.router.navigate(['./'], 
      {
        relativeTo: this.route, 
        queryParamsHandling: '',
        queryParams: {editingId: this.currentlyEditing}
      }
    )
  }

  lintEditData(data) {
    if (data) {
      data.balance = (data.balance).replace(/^0+/, '')
    }
    return data;
  }
}