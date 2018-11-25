import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // set tooltip on for bootstrap
    setTimeout(()=> {
      this.enableJqueryTooltip();
    },1000)
  }

  enableJqueryTooltip(): void {
    $('[data-toggle="tooltip"]').tooltip()
  }
  
}
