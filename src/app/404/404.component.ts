import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { TitleService } from '../service/title.service';

@Component({
  selector: 'app-notfound',
  templateUrl: '404.component.html',
  styleUrls: ['./404.component.css']
})

export class NotFoundComponent implements OnInit {

  constructor(public ts: TitleService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.ts.setPageTitle(data.title);
      }
    );
  }
}