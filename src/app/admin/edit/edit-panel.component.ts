import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'admin-edit-panel',
  templateUrl: 'edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})

export class PanelEditComponent implements OnInit {

  currentlyEditing: string;
  currentEditingDateSelect: string[] = [];

  constructor(public as: AdminService, public router: Router, 
    public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params) {
          this.currentlyEditing = params.editingId;
          this.getDateSelection(this.currentlyEditing);
        } else {
          this.currentlyEditing = null;
        }
      }
    )
  }

  navigateToSiling(silingId: string) {
    this.router.navigate(['./'], {relativeTo: this.route, 
      queryParams: {editingId: silingId}});
  }

  getDateSelection(editingId: string) {
    this.as.getDataForSinglePanel(editingId);
  }
}