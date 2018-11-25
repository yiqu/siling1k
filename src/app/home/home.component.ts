import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from '../shared/models/data.model';
import { CalcService } from '../service/calc.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  rawData: DataResponse = null;
  loading: boolean = false;

  constructor(private ds: DataService, private cs: CalcService) { }

  ngOnInit() {
    console.log("at Home");
    this.loadData();
    // have to do this everytime app switches back to this view
    this.enableJqueryTooltip();
  }

  loadData(): void {
    this.ds.getAllData$().subscribe(
      (res: HttpResponse<DataResponse>) => {
        this.rawData = res.body;
      },
      error => {
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  /**
   * Enable tooltip for BS
   */
  enableJqueryTooltip(): void {
    setTimeout(()=> {
      $('[data-toggle="tooltip"]').tooltip();
    },1000);
  }
}