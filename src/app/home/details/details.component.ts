import { Component, OnInit, OnChanges, SimpleChange, 
  ContentChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-details',
  templateUrl: 'details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnChanges, AfterViewInit {

  @ContentChild("detailsTitle") detailTitle: ElementRef;

  constructor() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.detailTitle.nativeElement.textContent);
  }
}