import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TitleService } from '../service/title.service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { AboutService } from '../service/about.service';
import { DataResponse } from '../shared/models/data.model';
import { MarketIndex } from '../shared/models/market-index.model';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css', '../app.component.css']
})

export class AboutComponent implements OnInit, OnDestroy {

  aboutText: string = "";
  aboutDataSub: Subscription = new Subscription();
  isLoadingSub: Subscription = new Subscription();

  aboutItems: MarketIndex[];
  isLoading: boolean = false; 

  constructor(public ts: TitleService, public router: Router, public route: ActivatedRoute,
    public as: AboutService) { 
  }

  ngOnInit() {
    this.setPageTitle();
    this.getAboutText();
    this.loadAboutData();
  }

  ngOnDestroy() {
    this.aboutDataSub.unsubscribe();
    this.isLoadingSub.unsubscribe();
  }

  getAboutText() {
    this.aboutText = "A market index is a weighted average of several stocks or other investment vehicles " + 
    "from a section of the stock market, and it is calculated from the price of the selected stocks. Market " + 
    "indexes are intended to represent an entire stock market and track the market's changes over time. " +
    "Index values help investors track changes in market values over long periods of time. For example, " +
    "the widely used Standard and Poor's 500 Index is computed by combining 500 large-cap U.S. stocks into " + 
    "one index value. Investors can track changes in the index's value over time and use it as a benchmark for " + 
    "their own portfolio returns."
  }

  onAddNewIndex() {
    this.router.navigate(['/about/new']);
  }

  loadAboutData() {
    this.as.getAllAboutData();
    this.aboutDataSub.unsubscribe();
    this.aboutDataSub = this.as.allAboutDataSubj.subscribe(
      (data: MarketIndex[]) => {
        this.aboutItems = data;
      }
    );
  }

  getIsLoading() {
    this.isLoadingSub.unsubscribe();
    this.isLoadingSub = this.as.isAboutLoading.subscribe(
      (val: boolean) => {
        this.isLoading = val;
      }
    );
  }

  setPageTitle() {
    this.route.data.subscribe(
      (data: Data) => {
        this.ts.setPageTitle(data.title);
      }
    );
  }
}