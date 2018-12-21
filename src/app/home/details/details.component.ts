import { Component, OnInit, OnChanges, SimpleChange, 
  ContentChild, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-details',
  templateUrl: 'details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnChanges, AfterViewInit {

  @Input()
  panelData;

  @ContentChild("detailsTitle") 
  detailTitle: ElementRef;

  constructor() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    //console.log("Panel data:",this.panelData);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //console.log(this.detailTitle.nativeElement.textContent);
  }
}