import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';
import { AboutService } from '../../service/about.service';
import { DataResponse, AboutItem } from '../../shared/models/data.model';
import { MarketIndex } from '../../shared/models/market-index.model';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TitleService } from 'src/app/service/title.service';

@Component({
  selector: 'about-detail',
  templateUrl: 'about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})

export class AboutDetailComponent implements OnInit, OnDestroy {

  itemId: string;
  aboutItem: AboutItem;
  aboutItem$: Subscription = new Subscription();
  loadingText: string = "Loading...";
  previousParamId: string = "";

  constructor(public router: Router, public route: ActivatedRoute, public as: AboutService,
              public ts: ToastrService, public titleSer: TitleService,) {
                
    this.route.params.subscribe(
      (param: Params) => {
        this.resetCurrentAboutItem(param.id);
        this.itemId = param.id;
        this.getAboutDetail(param.id);
      }
    );
  }

  /**
   * Subscribe to about item details
   */
  ngOnInit() {
    this.setPageTitle();
    
    this.aboutItem$ = this.as.singleAboutDataSubj.subscribe(
      (data: AboutItem) => {
        this.aboutItem = data;
        if (!this.aboutItem) {
          this.ts.error("This Market Index does not exist. Taking you back.");
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      }
    );

  }

  /**
   * Resetting the AboutItem will trigger the #loading component to display
   * @param currentId 
   */
  resetCurrentAboutItem(currentId: string) {
    if (this.itemId !== currentId) {
      this.aboutItem = null;
    }
  }

  /**
   * Triggered by param path change (AboutItem ID)
   * @param itemId 
   */
  getAboutDetail(itemId: string) {
    this.as.getSingleAboutData2(itemId);
  }

  goBackToAbout() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  setPageTitle() {
    this.route.data.subscribe(
      (data: Data) => {
        this.titleSer.setPageTitle(data.title);
      }
    );
  }

  ngOnDestroy() {
    this.aboutItem$.unsubscribe();
  }
}