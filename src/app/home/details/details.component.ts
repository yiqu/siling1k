import { Component, OnInit, OnChanges, SimpleChange, 
  ContentChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute, Params, Data } from "@angular/router";
import { ToggleService } from 'src/app/service/toggle.service';
import { ToggleAction } from 'src/app/shared/models/toggle-action.model';
import { DataService } from 'src/app/service/data.service';
import { DataResponse } from "../../shared/models/data.model";
import { PanelItem } from 'src/app/shared/models/panel.model';
import { ToastrService } from 'ngx-toastr';
import { CalcService } from 'src/app/service/calc.service';
import { GraphService } from 'src/app/service/graph.service';

@Component({
  selector: 'app-home-details',
  templateUrl: 'details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit, AfterViewInit {

  panelId: string = null;
  panelItemData: PanelItem = null;
  rawData: DataResponse = null;

  constructor(public router: Router, public route: ActivatedRoute, 
    public ts: ToggleService, public ds: DataService, public as: ToastrService,
    public cs: CalcService, public gs: GraphService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.panelId = params.panelId;
        this.getSinglePanelData();
      }
    );

    this.route.data.subscribe(
      (data: Data) => {
        //console.log(data)
      }
    )
  }

  ngAfterViewInit() {
  }

  getSinglePanelData() {
    this.ds.getAllData$().subscribe(
      (res: HttpResponse<DataResponse>) => {
        this.rawData = res.body;
      },
      error => {
        this.as.error("Error loading data. Reason: " + error + "Error");
      },
      () => {
        this.as.success('Data loaded successfully.', 'Success');
        this.panelItemData = this.cs.getSinglePanelData(this.rawData, this.panelId);
      }
    );
  }

  onPanelToggle() {
    this.router.navigate(["/home"]);
  }
}