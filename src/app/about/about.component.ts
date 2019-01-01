import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TitleService } from '../service/title.service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { AboutService } from '../service/about.service';
import { AboutItem, DataResponse } from '../shared/models/data.model';
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

  aboutItems: AboutItem[] = [];
  isLoading: boolean = false; 

  constructor(public ts: TitleService, public router: Router, public route: ActivatedRoute,
    public as: AboutService) { 
  }

  ngOnInit() {
    this.setPageTitle();
    this.getAboutText();
    this.loadAboutData();
    this.getIsLoading();
  }

  ngOnDestroy() {
    this.aboutDataSub.unsubscribe();
    this.isLoadingSub.unsubscribe();
  }

  getAboutText() {
    this.aboutText = "Rad more about the popular market indices below."
  }

  onAddNewIndex() {
    this.router.navigate(['/about/new']);
  }

  loadAboutData() {
    this.as.getAllAboutData();
    this.aboutDataSub.unsubscribe();
    this.aboutDataSub = this.as.allAboutDataSubj.subscribe(
      (data: AboutItem[]) => {
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