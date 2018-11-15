import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from '../shared/models/data.model'
import { ItemDetail } from '../shared/models/data.model';
import { CalcService } from '../service/calc.service';

@Component({
  selector: 'app-deegee',
  templateUrl: 'deegee.component.html',
  styleUrls: ['deegee.component.css']
})

export class DeeGeeComponent implements OnInit {

  rawData: DataResponse = null;
  geeDeeData: ItemDetail[] = [];

  constructor(public ds: DataService, public cs: CalcService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    console.log("Loading...")
    this.ds.getAllData().subscribe(
      (res: HttpResponse<DataResponse>) => {
        this.rawData = res.body;
        this.extractData();
      },
      error => {
      },
      () => {
        console.log("Done")
      }
    )
  }

  extractData() {
    this.geeDeeData = this.rawData.items.gd;
    console.log(this.geeDeeData);
    this.cs.getReturnPercent(this.geeDeeData);
  }

}