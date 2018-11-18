import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from './shared/models/data.model';
import { CalcService } from './service/calc.service';
import { ItemDetail } from './shared/models/data.model';

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
    )
  }
  
}
