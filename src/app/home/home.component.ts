import { Component, OnInit, ChangeDetectorRef, AfterViewInit, 
  ChangeDetectionStrategy, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../service/data.service';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from '../shared/models/data.model';
import { CalcService } from '../service/calc.service';
import { ToggleService } from '../service/toggle.service';
import { PanelItem } from '../shared/models/panel.model';
import { ToggleAction } from '../shared/models/toggle-action.model';
import { Utils } from '../shared/utils';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { GraphService } from '../service/graph.service';
import { TitleService } from '../service/title.service';


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

  panelDataSub$: Subscription = new Subscription();
  graphDataSub$: Subscription = new Subscription();
  graphConfigSub$: Subscription = new Subscription();

  // holds all of the panel data (caluclated already) to be displayed
  allPanelData: PanelItem[] = null;
  mainGraphSize: any = {height: "400px", width: "400px"};

  /**
   * Constructor
   */
  constructor(private ds: DataService, public cs: CalcService, public ts: ToggleService, 
    private cdRef:ChangeDetectorRef, public as: ToastrService, 
    public gs: GraphService, public router: Router, public route: ActivatedRoute,
    public titleService: TitleService) { 
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.panelDataSub$.unsubscribe();
    this.graphConfigSub$.unsubscribe();
    this.graphDataSub$.unsubscribe();
  }

  ngOnInit() {
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

    this.route.data.subscribe(
      (data) => {
        this.titleService.setPageTitle(data.title);
      }
    );
    
    this.loadData();
    // have to do this everytime app switches back to this view
    Utils.enableJqueryTooltip();
  }

  loadData(): void {
    this.ds.getAllData2$().subscribe(
      (data: DataResponse) => {
        this.rawData = data;
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

  onPanelToggle(panelId: string) {
      this.router.navigate(['/details', panelId]);
  }

}