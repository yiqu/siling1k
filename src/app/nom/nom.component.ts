import { Component, SimpleChange, Input, OnChanges } from '@angular/core';
import { CalcService } from '../service/calc.service';
import { DataService } from '../service/data.service';
import { ItemDetail } from '../shared/models/data.model';

@Component({
  selector: 'app-nom',
  templateUrl: 'nom.component.html',
  styleUrls: ['./nom.component.css']
})

export class NomComponent implements OnChanges {
  
  @Input() 
  nomData: ItemDetail[];

  displayImageUrl: string = "assets/images/asc_logo.jpg";
  displayTitle: string = "Ascensus";

  constructor(public ds: DataService, public cs: CalcService) {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes['nomData'].currentValue) {
      this.cs.getReturnPercent(this.nomData);
    }
  }
}