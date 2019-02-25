import { Component, OnInit, OnDestroy } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-budget-overview',
  templateUrl: 'budget-overview.component.html',
  styleUrls: ['./budget-overview.component.css']
})

export class BudgetOverviewComponent implements OnInit {

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