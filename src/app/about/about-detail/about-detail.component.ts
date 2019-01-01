import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';
import { AboutService } from '../../service/about.service';
import { AboutItem, DataResponse } from '../../shared/models/data.model';
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
  aboutItem: AboutItem;
  aboutItem$: Subscription = new Subscription();
  loadingText: string = "Loading...";

  constructor(public router: Router, public route: ActivatedRoute, public as: AboutService,
              public ts: ToastrService) {
                
    // prevent value being changed after detection changed has occured in About Home Component
    this.route.params.subscribe(
      (param: Params) => {
        this.itemId = param.id;
        this.getAboutDetail(param.id);
      }
    );
  }

  ngOnInit() {
  }

  getAboutDetail(itemId: string) {
    this.loadingText = "Loading...";
    this.as.isAboutLoading.next(true);
    this.aboutItem$.unsubscribe();
    this.as.getSingleAboutData2(itemId);
    this.aboutItem$ = this.as.singleAboutDataSubj.subscribe(
      (data: AboutItem) => {
        this.as.isAboutLoading.next(false);
        this.aboutItem = data;
        //console.log(this.aboutItem, "ITEM!")
        if (!this.aboutItem) {
          this.loadingText = "This Market Index does not exist.";
          this.ts.error(this.loadingText);
        }
      }
    );
  }

  goBackToAbout() {
    this.router.navigate(['../'], {relativeTo: this.route});
    this.loadingText = "Loading...";
  }

  ngOnDestroy() {
    this.aboutItem$.unsubscribe();
  }
}