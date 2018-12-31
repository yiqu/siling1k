import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';
import { AboutService } from '../../service/about.service';
import { AboutItem, DataResponse } from '../../shared/models/data.model';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'about-detail',
  templateUrl: 'about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})

export class AboutDetailComponent implements OnInit, OnDestroy {

  itemId: string;
  aboutItem: AboutItem;
  aboutItem$: Subscription = new Subscription();

  constructor(public router: Router, public route: ActivatedRoute, public as: AboutService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.itemId = param.id;
        this.getAboutDetail(param.id);
      }
    );

    
  }

  getAboutDetail(itemId: string) {
    this.as.getSingleAboutData(itemId);
    this.aboutItem$ = this.as.getSingleAboutData$.subscribe(
      (item: AboutItem) => {
        //console.log("item: ",item);
        this.aboutItem = item;
      }
    );
  }

  ngOnDestroy() {
    this.aboutItem$.unsubscribe();
    console.log("unsub in detail")
  }
}