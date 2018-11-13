import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from '../shared/models/data.model'

@Component({
  selector: 'app-deegee',
  templateUrl: 'deegee.component.html',
  styleUrls: ['deegee.component.css']
})

export class DeeGeeComponent implements OnInit {

  currentData: DataResponse = null;

  constructor(public ds: DataService) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.ds.getAllData().subscribe(
      (res: HttpResponse<DataResponse>) => {
        this.currentData = res.body;
        console.log(this.currentData.items.gd)

      },
      error => {
      },
      () => {

      }
    )
  }

}