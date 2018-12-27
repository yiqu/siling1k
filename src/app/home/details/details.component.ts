import { Component, OnInit, OnChanges, SimpleChange, 
  ContentChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-home-details',
  templateUrl: 'details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit, OnChanges, AfterViewInit {

  @Input()
  panelData;

  @ContentChild("detailsTitle") 
  detailTitle: ElementRef;

  constructor(public router: Router, public route: ActivatedRoute) {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log("params at Details: ",params);
      }
    )
  }

  ngAfterViewInit() {
  }
}