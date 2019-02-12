import { Component, OnInit } from '@angular/core';
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

  constructor(public as: AdminService, public router: Router, 
    public route: ActivatedRoute) {
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
        console.log(this.silingTypeToEdit)
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
}