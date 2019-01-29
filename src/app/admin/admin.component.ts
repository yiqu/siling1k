import { Component, OnInit } from '@angular/core';
import { Editable } from '../shared/models/editable.model';
import { TitleService } from '../service/title.service';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'siling1k-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css', '../app.component.css']
})

export class AdminComponent implements OnInit {

  editableItems = [
    new Editable("New Daily Entry", 'add')
  ]

  constructor(public ts: TitleService, public router: Router, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.setPageTitle();
  }

  setPageTitle() {
    this.route.data.subscribe(
      (data: Data) => {
        this.ts.setPageTitle(data.title);
      }
    );
  }
  
}