import { Injectable } from '@angular/core';
import { ItemDetail } from '../shared/models/data.model';
import * as moment from 'moment';

@Injectable()
export class CalcService {

  today: any;

  constructor() { 
    this.today = moment();
    console.log(this.today)
  }

  getReturnPercent(data: ItemDetail[]) {
    if (data) {
      for (let i=1; i<data.length; i++) {
        data[i].profit = 0.5;
        let profit: number = data[i].balance - data[i-1].balance;
        data[i].profit = profit;
        let percent = (profit / data[i-1].balance);
        data[i].profitPercent = percent;
        let dateCreated = (moment(data[i].date, "MM-DD-YYYY HH:mm"));
        let age = dateCreated.from(this.today);
        data[i].age = age;
        data[i].ageInDays = moment(this.today).diff(dateCreated, 'days');
      }
      this.reverseArray(data);
    }
  }

  reverseArray(arr: any[]): any[] {
    return arr.reverse();
  }

}