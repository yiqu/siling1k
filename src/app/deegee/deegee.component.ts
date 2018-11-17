import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from '../shared/models/data.model'
import { ItemDetail } from '../shared/models/data.model';
import { CalcService } from '../service/calc.service';
import { Utils } from '../shared/utils';

@Component({
  selector: 'app-deegee',
  templateUrl: 'deegee.component.html',
  styleUrls: ['deegee.component.css', '../app.component.css']
})

export class DeeGeeComponent implements OnInit {

  rawData: DataResponse = null;
  geeDeeData: ItemDetail[] = [];
  loading: boolean = false;
  positionClass: string = "col-md, mb-1, gains-rate";
  negativeClass: string = "";


  constructor(public ds: DataService, public cs: CalcService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.ds.getAllData().subscribe(
      (res: HttpResponse<DataResponse>) => {
        this.rawData = res.body;
      },
      error => {
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.extractData();
      }
    )
  }

  extractData(): void {
    this.geeDeeData = this.rawData.items.gd;
    if (this.geeDeeData.length > 1) {
      this.cs.getReturnPercent(this.geeDeeData);
    }
  }

  getGainsClass(num: number): string {
    let defaults = "gains-rate col-md numbers med-number spacing-half";
    return num > 0 ? (defaults + " positive") : (defaults + " negative");
  }

  formatCurrency(num: number): string {
    return Utils.toLocalFormatting(num);
  }

}