import { Component, OnInit, ChangeDetectorRef, AfterViewInit, 
  ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from '../shared/models/data.model';
import { CalcService } from '../service/calc.service';
import { ToggleService } from '../service/toggle.service';
import { PanelItem } from '../shared/models/panel.model';
import { ToggleAction } from '../shared/models/toggle-action.model';
import { Utils } from '../shared/utils';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  rawData: DataResponse = null;
  listOfPanels: Set<string> = new Set();
  loading: boolean = false;

  fidDisplayImageUrl: string = "assets/images/fid_logo.jpg";
  fidDisplayTitle: string = "Fidelity";
  ascDisplayImageUrl: string = "assets/images/asc_logo.jpg";
  ascDisplayTitle: string = "Ascensus";
  empDisplayImageUrl: string = "assets/images/emp_logo.png";
  empDisplayTitle: string = "Empower";

  constructor(private ds: DataService, public cs: CalcService, public ts: ToggleService, 
    private cdRef:ChangeDetectorRef, public as: ToastrService) { 
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    //console.log("at Home", this.ts.currentToggledPanel);
    this.loadData();
    // have to do this everytime app switches back to this view
    Utils.enableJqueryTooltip();
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
        this.as.success('Data loaded successfully.', 'Success')
      }
    );
  }

  /**
   * Get number of panels in response
   */
  extraData() {
    Object.keys(this.rawData.items).forEach((panelKey) => {
      this.listOfPanels.add(panelKey);
    });
  }

  getPanelItemDetails(panelKey: string): PanelItem {
    if (this.rawData) {
      let result: PanelItem = new PanelItem("", "", null);
      let data = this.rawData.items[panelKey];
      switch (panelKey) {
        case "Fidelity": 
          result.title = this.fidDisplayTitle;
          result.displayUrl = this.fidDisplayImageUrl;
          result.dataArray = data;
          break;
        case "Empower": 
          result.title = this.empDisplayTitle;
          result.displayUrl = this.empDisplayImageUrl;
          result.dataArray = data;
          break;
        case "Ascensus": 
          result.title = this.ascDisplayTitle;
          result.displayUrl = this.ascDisplayImageUrl;
          result.dataArray = data;
          break;
        default:
          result.title = "New Title";
          result.displayUrl = "";
          result.dataArray = null;
      };
      //console.log('Got details');
      return result;
    }
  }

  onPanelToggle(panel: ToggleAction) {
    this.ts.currentToggledPanel = panel;
  }

  getShowPanelDetail(): boolean {
    return this.ts.currentToggledPanel && this.ts.currentToggledPanel.getActionId() === 'expand';
  }

}