import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TitleService } from '../service/title.service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { BudgetService } from './../service/budget.service';
import { NavItem } from '../shared/models/nav-item.model';
import { Utils } from '../shared/utils';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-budget',
  templateUrl: 'budget.component.html',
  styleUrls: ['./budget.component.css']
})

export class BudgetComponent implements OnInit {

  monthPath: string = "monthly";
  leftNavTopGroup: NavItem[] = [];
  leftNavMonthGroup: NavItem[] = [];
  
  bugetAllData: any;
  entryDates: string[] = [];
  leftNavLoaded: boolean = false;



  constructor(public ts: TitleService, public router: Router, public route: ActivatedRoute,
    public bs: BudgetService) {

  }

  ngOnInit() {
    this.setPageTitle();
    this.getAllBudgetData();
  }


  getAllBudgetData() {
    this.bs.budgetAll$.unsubscribe();
    this.leftNavLoaded = false;
    this.bs.budgetAll$ = this.bs.getAllBudget().subscribe(
      (res: any) => {
        console.log(res)
        this.bugetAllData = res;
        if (this.bugetAllData) {
          this.entryDates = Utils.getObjectKeys(this.bugetAllData);
        }
      },
      (err) => {
        this.leftNavLoaded = true;
      },
      () => {
        this.createLeftNav();
        this.leftNavLoaded = true;
      }
    )
  }

  createLeftNav() {
    // top group
    this.leftNavTopGroup.push(new NavItem("Overview", "overview"), new NavItem("Add New", "add"));

    for (let i=0; i<this.entryDates.length; i++) {
      let date: moment.Moment = moment(this.entryDates[i], "MM-DD-YYYY");
      let monthText: string = date.format("MMMM");
      let month: string = date.format("MM");
      let year: string = date.format("YYYY");
      let item = new NavItem(monthText + " (" + month + "/" + year+")", this.entryDates[i]);
      item['month'] = +month
      item['year'] = +year;
      this.leftNavMonthGroup.push(item);
    }
    //sort by year, then month
    this.leftNavMonthGroup = _.sortBy(this.leftNavMonthGroup, ['year', 'month']);
    this.leftNavMonthGroup.reverse();
  }

  
  setPageTitle() {
    this.route.data.subscribe(
      (data: Data) => {
        this.ts.setPageTitle(data.title);
      }
    );
  }
  
}