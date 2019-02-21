import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { CalcService } from '../../service/calc.service';
import { PanelItem } from '../../shared/models/panel.model';
import { ItemDetail } from 'src/app/shared/models/data.model';
import { Utils } from '../../shared/utils';

@Component({
  selector: 'app-home-summary',
  templateUrl: 'summary.component.html',
  styleUrls: ['./summary.component.css', '../home.component.css']
})

export class SilingSummaryComponent implements OnInit {

  summaryTitle: string = "Siling1k Summary";
  summary: string = "";
  summaryFooter: string = "Last updated";
  lastUpdatedDate: string = "";
  lastUpdatedAge: string;
  totalSilingAmount: string = "";
  lastUpdatedInDays: number;
  silingDataSub$: Subscription = new Subscription();
  today: any;

  constructor(public cs: CalcService) {
    this.today = moment();
  }

  ngOnInit() {
    if (this.cs.allPanelData.length > 1) {
      this.lastUpdatedDate = this.getLastUpdatedDate();
      this.getLastUpdatedAge();
      this.totalSilingAmount = this.getTotalAmount();
    }
  }

  getLastUpdatedDate(): string {
    const firstSilingData: ItemDetail[] = this.cs.allPanelData[0].dataArray;
    const dataLength: number = firstSilingData.length;
    const lastItemDate: string = firstSilingData[dataLength - 1].date;
    return lastItemDate;
  }

  getLastUpdatedAge() {
    let dateCreated = (moment(this.lastUpdatedDate, "MM-DD-YYYY HH:mm"));
    let age = dateCreated.from(this.today);
    this.lastUpdatedAge = age;
    this.lastUpdatedInDays = moment(this.today).diff(dateCreated, 'days');
  }

  getTotalAmount(): string {
    let total: number = 0;
    const list = this.cs.allPanelData.slice();
    for (let i=0; i<list.length; i++) {
      total += list[i].dataArray[(list[i].dataArray.length) - 1].balance;
    }
    return Utils.toLocalFormatting(total);
  }

}