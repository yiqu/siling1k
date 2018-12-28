import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: 'loading.component.html',
  styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit, OnChanges {

  @Input()
  title: string = "";

  constructor() {
  }

  ngOnInit() { }

  ngOnChanges() {
  }
}