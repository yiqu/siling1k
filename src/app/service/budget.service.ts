import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { ToastrService } from 'ngx-toastr';
import { IBudgetMonthly } from '../shared/models/buget-monthly.model';
import * as _ from 'lodash';
import { Utils } from '../shared/utils';

const BUDGET_PATH = "budget";

@Injectable()
export class BudgetService {

  budgetAll$: Subscription = new Subscription();

  constructor(public ds: DataService, public ts: ToastrService) {
  }

  getAllBudget(): Observable<any> {
    let url = BUDGET_PATH + ".json"
    return this.ds.getData(url).pipe(
      map(
        (res: HttpResponse<any>) => {
          // let result: any[] = [];
          // let keys = Object.keys(res.body);
          // for(let i=0; i<keys.length; i++) {
          //   let obj = {};
          //   let keyName = keys[i];
          //   obj[keyName] = res.body[keyName];
          //   result.push(obj);
          // }
          return (res.body);
        }
      )
    );
  }

}