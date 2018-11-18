import { Component, SimpleChange, Input, OnChanges } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from '../shared/models/data.model'
import { ItemDetail } from '../shared/models/data.model';
import { CalcService } from '../service/calc.service';
import { Utils } from '../shared/utils';

@Component({
  selector: 'app-deegee',
  templateUrl: 'deegee.component.html',
  styleUrls: ['deegee.component.css', '../app.component.css']
})

export class DeeGeeComponent implements OnChanges {

  @Input() 
  geeDeeData: ItemDetail[];

  displayImageUrl: string = "assets/images/fid_logo.jpg";
  displayTitle: string = "Fid";

  constructor(public ds: DataService, public cs: CalcService) {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes['geeDeeData'].currentValue) {
      this.cs.getReturnPercent(this.geeDeeData);
    }
  }

}