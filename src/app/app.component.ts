import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from './shared/models/data.model';
import { CalcService } from './service/calc.service';
import { ItemDetail } from './shared/models/data.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'siling';
  rawData: DataResponse = null;
  loading: boolean = false;

  constructor(private ds: DataService, private cs: CalcService) {
  }

  ngOnInit() {
    this.loadData();
    // set tooltip on for bootstrap
    setTimeout(()=> {
      this.enableJqueryTooltip();
    },1000)
  }

  enableJqueryTooltip(): void {
    $('[data-toggle="tooltip"]').tooltip()
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
  
}
