import { Component, SimpleChange, Input, OnChanges } from '@angular/core';
import { ItemDetail } from '../models/data.model';
import { Utils } from '../utils';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-display',
  templateUrl: 'display.component.html',
  styleUrls: ['display.component.css', '../../app.component.css']
})

export class DisplayComponent implements OnChanges {
  
  @Input()
  displayImageUrl: string;

  @Input()
  displayData: ItemDetail;

  @Input()
  displayTitle: string;

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  }

  constructor() {
  }


  getGainsClass(num: number): string {
    let defaults = "gains-rate col-md numbers med-number spacing-half";
    return num > 0 ? (defaults + " positive") : (defaults + " negative");
  }

  formatCurrency(num: number): string {
    return Utils.toLocalFormatting(num);
  }

}