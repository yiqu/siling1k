import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'admin-landing',
  templateUrl: 'admin-landing.component.html'
})

export class AdminLandingComponent implements OnInit {
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