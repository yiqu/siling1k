import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'admin-edit-panel',
  templateUrl: 'edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})

export class PanelEditComponent implements OnInit {

  constructor(public as: AdminService) {

  }

  ngOnInit() {

  }

  navigateToSiling(silingId: string) {
    console.log(silingId)
  }
}