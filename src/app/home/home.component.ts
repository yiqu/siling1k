import { Component, OnInit, ChangeDetectorRef, AfterViewInit, 
  ChangeDetectionStrategy, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../environments/environment';
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
import { GraphService } from '../service/graph.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

  rawData: DataResponse = null;
  graphData: any;
  graphConfig: any;
  graphSize: string;

  panelDataSub$: Subject<PanelItem[]> = new Subject<PanelItem[]>();
  graphDataSub$: Subject<any> = new Subject<any>();
  graphConfigSub$: Subject<any> = new Subject<any>();
  graphSizeSub$: Subject<any> = new Subject<any>();

  // holds all of the panel data (caluclated already) to be displayed
  allPanelData: PanelItem[] = [];
  selectedPanelDetail: PanelItem = null;
  mainGraphSize: any = {height: "400px", width: "400px"};
  showOverviewGraph: boolean = true;

  /**
   * Constructor
   */
  constructor(private ds: DataService, public cs: CalcService, public ts: ToggleService, 
    private cdRef:ChangeDetectorRef, public as: ToastrService, 
    public gs: GraphService, public router: Router, public route: ActivatedRoute) { 
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.panelDataSub$.unsubscribe();
    this.graphConfigSub$.unsubscribe();
    this.graphDataSub$.unsubscribe();
    this.graphSizeSub$.unsubscribe();
  }

  ngOnInit() {
    this.showOverviewGraph = environment.production;
    
    // set subscription for panel data 
    this.panelDataSub$ = this.cs.onDataReloaded.subscribe(
      (data: PanelItem[]) => {
        this.allPanelData = data;
        this.as.success('Data calculated.', 'Success');
      }
    );

    this.graphDataSub$ = this.gs.onGraphDataChange.subscribe(
      (graphData: any) => {
        this.graphData = graphData;
        this.as.info('Graph data loaded.', 'Info.');
      }
    );

    this.graphConfigSub$ = this.gs.onGraphConfigChange.subscribe(
      (graphConfig: any) => {
        this.graphConfig = graphConfig;
        this.as.info('Graph configuration loaded.', 'Info.');
      }
    );

    this.graphSizeSub$ = this.gs.onGraphSizeChange.subscribe(
      (graphSize: string) => {
        this.graphSize = graphSize;
        this.as.info('Graph size updated to: ' + this.graphSize, 'Info.');
      }
    );

    console.log(this.route)  
    this.route.params.subscribe(
      (params: Params) => {
        console.log("params at Home: ", params)
      }
    )
    

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
        this.as.error("Error loading data. Reason: " + error + "Error");
      },
      () => {
        this.as.success('Data loaded successfully.', 'Success');
        this.cs.setRawData(this.rawData);
      }
    );
  }

  onPanelToggle(panel: ToggleAction) {
    this.ts.currentToggledPanel = panel;
    console.log(this.ts.currentToggledPanel)
    

    if (panel.getActionId() === "expand") {
      this.selectedPanelDetail = this.cs.getPanelDetailByName(panel.getItemId());
      this.gs.setDetailMode(true);
      this.router.navigate([panel.getItemId()], {relativeTo: this.route});
    } else {
      this.selectedPanelDetail = null;
      this.gs.setDetailMode(false);
      this.router.navigate(['/home']);
    }
  }

}