import { Component, SimpleChange, Input, OnChanges } from '@angular/core';
import { CalcService } from '../service/calc.service';
import { DataService } from '../service/data.service';
import { ItemDetail } from '../shared/models/data.model';
import { ToggleAction } from '../shared/models/toggle-action.model';

@Component({
  selector: 'app-prax',
  templateUrl: 'prax.component.html',
  styleUrls: ['./prax.component.css']
})

export class PraxComponent implements OnChanges {
  
  @Input() 
  praxData: ItemDetail[];

  displayImageUrl: string = "assets/images/emp_logo.png";
  displayTitle: string = "Empower";

  constructor(public ds: DataService, public cs: CalcService) {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes['praxData'].currentValue) {
      this.cs.getReturnPercent(this.praxData);
    }
  }

  onExpandToggleOutput(toggled: ToggleAction) {
    console.log("1: ", toggled.toString());
  }
}