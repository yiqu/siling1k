import { Injectable } from '@angular/core';
import { ItemDetail } from '../shared/models/data.model';

@Injectable()
export class CalcService {

  constructor() { 

  }

  getReturnPercent(data: ItemDetail[]) {
    for (let i=1; i<data.length; i++) {
      data[i].profit = 0.5;
      let profit: number = data[i].balance - data[i-1].balance;
      data[i].profit = profit;
      let percent = (profit / data[i-1].balance);
      data[i].profitPercent = percent;
    }
    this.reverseArray(data);
  }

  reverseArray(arr: any[]): any[] {
    return arr.reverse();
  }



}