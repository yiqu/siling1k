import { Component, OnInit, ChangeDetectorRef, AfterViewInit, 
  ChangeDetectionStrategy, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from '../shared/models/data.model';
import { CalcService } from '../service/calc.service';
import { ToggleService } from '../service/toggle.service';
import { PanelItem } from '../shared/models/panel.model';
import { ToggleAction } from '../shared/models/toggle-action.model';
import { Utils } from '../shared/utils';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

  rawData: DataResponse = null;
  graphData: any;
  graphConfig: any;
  panelDataSub: Subject<any> = new Subject<any>();

  // holds all of the panel data (caluclated already) to be displayed
  allPanelData: PanelItem[] = [];
  selectedPanelDetail: PanelItem = null;


  /**
   * Constructor
   */
  constructor(private ds: DataService, public cs: CalcService, public ts: ToggleService, 
    private cdRef:ChangeDetectorRef, public as: ToastrService) { 
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.panelDataSub.unsubscribe();
  }

  ngOnInit() {
    // set subscription for panel data 
    this.panelDataSub = this.cs.onDataReloaded.subscribe(
      (data: PanelItem[]) => {
        this.allPanelData = data;
        this.as.success('Data calculated.', 'Success');
      }
    );

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
      },
      () => {
        this.cs.setRawData(this.rawData);
        this.as.success('Data loaded successfully.', 'Success');
        this.getOverviewGraphData();
      }
    );
  }

  onPanelToggle(panel: ToggleAction) {
    this.ts.currentToggledPanel = panel;
    if (panel.getActionId() === "expand") {
      this.selectedPanelDetail = this.cs.getPanelDetailByName(panel.getItemId());
    } else {
      this.selectedPanelDetail = null;
    }
  }

  getShowPanelDetail(): boolean {
    return this.ts.currentToggledPanel && (this.selectedPanelDetail !== null);
  }

  getOverviewGraphData(): any {
    let overviewData;
    overviewData = {
      datasets: [{
        label: "US Dates",
        data: [{
            x: "04/01/2014", y: 175
        }, {
            x: "10/01/2014", y: 175
        }, {
            x: "04/01/2015", y: 178
        }, {
            x: "10/01/2015", y: 178
        }],
        fill: false,
        borderColor: 'red'
    },
    {
        label: "UK Dates",
        data:  [{
            x: "01/04/2014", y: 175
        }, {
            x: "10/10/2014", y: 235
        }, {
            x: "01/04/2015", y: 178
        }, {
            x: "01/10/2015", y: 178
        }],
        fill:  false,
        borderColor: 'blue'
    }]
  }
  this.graphData = overviewData;
  }

}