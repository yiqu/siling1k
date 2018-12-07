import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-home-details',
  templateUrl: 'details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnChanges {

  constructor() {

  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log(changes)
  }

  ngOnInit() { }
}