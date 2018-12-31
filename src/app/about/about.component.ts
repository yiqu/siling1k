import { Component, OnInit, OnDestroy } from '@angular/core';
import { TitleService } from '../service/title.service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { AboutService } from '../service/about.service';
import { AboutItem, DataResponse } from '../shared/models/data.model';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit, OnDestroy {

  aboutText: string = "";
  aboutDataSub: Subscription = new Subscription();
  aboutItems: AboutItem[] = [];

  constructor(public ts: TitleService, public router: Router, public route: ActivatedRoute,
    public as: AboutService) { 
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.ts.setPageTitle(data.title);
      }
    );

    this.getAboutText();

    this.aboutDataSub = this.as.getAboutData$().subscribe(
      (data: HttpResponse<DataResponse>) => { 
        this.aboutItems = data.body.items;
      }
    )

  }

  ngOnDestroy() {
    this.aboutDataSub.unsubscribe();
  }

  getAboutText() {
    this.aboutText = "The SiLing1k"
  }
}