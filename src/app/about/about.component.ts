import { Component, OnInit } from '@angular/core';
import { TitleService } from '../service/title.service';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  aboutText: string = "";

  constructor(public ts: TitleService, public router: Router, public route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.ts.setPageTitle(data.title);
      }
    );

    this.getAboutText();

  }

  getAboutText() {
    this.aboutText = "The SiLing1k"
  }
}