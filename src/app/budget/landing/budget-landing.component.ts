import { Component, OnInit, OnDestroy } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-budget-landing',
  templateUrl: 'budget-landing.component.html',
  styleUrls: ['./budget-landing.component.css']
})

export class BudgetLandingComponent implements OnInit {

  budgetOverviewText: string = "Welcome to Budget.";

  constructor(public ts: TitleService, public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.setPageTitle();
  }

  setPageTitle() {
    this.route.data.subscribe(
      (data: Data) => {
        this.ts.setPageTitle(data.title);
      }
    );
  }
}