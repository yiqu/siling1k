import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from '../shared/models/data.model';
import { CalcService } from '../service/calc.service';
import { ToggleService } from '../service/toggle.service';
import { PanelItem } from '../shared/models/panel.model';

import * as $ from 'jquery';
import { ToggleAction } from '../shared/models/toggle-action.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  rawData: DataResponse = null;
  listOfPanels: string[] = [];
  loading: boolean = false;

  fidDisplayImageUrl: string = "assets/images/fid_logo.jpg";
  fidDisplayTitle: string = "Fidelity";
  ascDisplayImageUrl: string = "assets/images/asc_logo.jpg";
  ascDisplayTitle: string = "Ascensus";
  empDisplayImageUrl: string = "assets/images/emp_logo.png";
  empDisplayTitle: string = "Empower";

  constructor(private ds: DataService, public cs: CalcService, public ts: ToggleService, private cdRef:ChangeDetectorRef) { 
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    console.log("at Home");
    this.loadData();
    // have to do this everytime app switches back to this view
    this.enableJqueryTooltip();
  }

  loadData(): void {
    this.ds.getAllData$().subscribe(
      (res: HttpResponse<DataResponse>) => {
        this.rawData = res.body;
      },
      error => {
        this.loading = false;
      },
      () => {
        this.extraData();
        // Manually run detection change after data is loaded
        this.cdRef.markForCheck();
      }
    );
  }

  extraData() {
    Object.keys(this.rawData.items).forEach((panelKey) => {
      this.listOfPanels.push(panelKey);
    });
  }

  /**
   * Enable tooltip for BS
   */
  enableJqueryTooltip(): void {
    setTimeout(()=> {
      $('[data-toggle="tooltip"]').tooltip();
    },1000);
  }
  
  getPanelItemDetails(panelKey: string): PanelItem {
    if (this.rawData) {
      let result: PanelItem = new PanelItem("", "", null);
      let data = this.rawData.items[panelKey];
      switch (panelKey) {
        case "gd": 
          result.title = this.fidDisplayTitle;
          result.displayUrl = this.fidDisplayImageUrl;
          result.dataArray = data;
          break;
        case "prax": 
          result.title = this.empDisplayTitle;
          result.displayUrl = this.empDisplayImageUrl;
          result.dataArray = data;
          break;
        
        case "nom": 
          result.title = this.ascDisplayTitle;
          result.displayUrl = this.ascDisplayImageUrl;
          result.dataArray = data;
          break;
        
      };
      console.log('Got details');
      return result;
    }
  }

  onPanelToggled(panelTitle: ToggleAction) {
    this.ts.currentToggledPanel = panelTitle;
    console.log(this.ts.currentToggledPanel);
  }
}