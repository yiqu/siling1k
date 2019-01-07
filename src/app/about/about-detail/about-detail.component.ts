import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';
import { AboutService } from '../../service/about.service';
import { DataResponse } from '../../shared/models/data.model';
import { MarketIndex, MarketIndeFact } from '../../shared/models/market-index.model';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'about-detail',
  templateUrl: 'about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})

export class AboutDetailComponent implements OnInit, OnDestroy {

  itemId: string;
  aboutItem: MarketIndex;
  aboutItem$: Subscription = new Subscription();
  loadingText: string = "Loading...";
  previousParamId: string = "";

  constructor(public router: Router, public route: ActivatedRoute, public as: AboutService,
              public ts: ToastrService) {
                
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
    this.aboutItem$ = this.as.singleAboutDataSubj.subscribe(
      (data: MarketIndex) => {
        this.aboutItem = data;
        if (!this.aboutItem) {
          this.ts.error("This Market Index does not exist.");
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

  ngOnDestroy() {
    this.aboutItem$.unsubscribe();
  }
}