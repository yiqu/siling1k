import { Injectable, Output, EventEmitter } from '@angular/core';
import { ItemDetail } from '../shared/models/data.model';
import { PanelItem } from '../shared/models/panel.model';
import { DataResponse } from '../shared/models/data.model';
import * as moment from 'moment';
import * as _ from 'lodash';
import { GraphService } from './graph.service';
import { ChartGraphData } from '../shared/models/graph-data.model';
import { ChartDataPoint } from '../shared/models/graph-datapoint.model'
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

const fidDisplayImageUrl: string = "assets/images/fid_logo.jpg";
const fidDisplayTitle: string = "Fidelity";
const ascDisplayImageUrl: string = "assets/images/asc_logo.jpg";
const ascDisplayTitle: string = "Ascensus";
const empDisplayImageUrl: string = "assets/images/emp_logo.png";
const empDisplayTitle: string = "Empower";

@Injectable()
export class CalcService {

  @Output()
  onDataReloaded: Subject<PanelItem[]> = new Subject<PanelItem[]>();

  rawData: DataResponse;
  listOfPanels: Set<string> = new Set<string>();
  allPanelData: PanelItem[] = [];

  today: any;

  constructor(public gs: GraphService) { 
    this.today = moment();
  }

  getReturnPercent(data: ItemDetail[], reverse: boolean = true) {
    if (data) {
      for (let i=1; i<data.length; i++) {
        let profit: number = data[i].balance - data[i-1].balance;
        data[i].profit = profit;
        let percent = (profit / data[i-1].balance);
        data[i].profitPercent = percent;
        let dateCreated = (moment(data[i].date, "MM-DD-YYYY HH:mm"));
        let age = dateCreated.from(this.today);
        data[i].age = age;
        data[i].ageInDays = moment(this.today).diff(dateCreated, 'days');
      }
      return data;
    }
  }

  resetPanelData() {
    this.listOfPanels = new Set<string>();
    this.allPanelData = [];
  }

  setRawData(rawData: DataResponse): void {
    this.resetPanelData();
    this.rawData = rawData;
    this.constructPanelData(this.rawData);
  }

  constructPanelData(rawData: DataResponse) {
    Object.keys(rawData.items).forEach((panelKey: string) => {
      this.listOfPanels.add(panelKey);
      this.allPanelData.push(this.getPanelItemDetails(rawData, panelKey));
    });
    // reverse the order of items
    this.allPanelData.reverse();
    this.onDataReloaded.next(this.allPanelData);
    // set graph data and emit the changes
    this.setDataForGraph(this.allPanelData);
  }

  getSinglePanelData(rawData: DataResponse, panelId: string): PanelItem {
    return this.getPanelItemDetails(rawData, panelId);
  }

  getPanelItemDetails(rawData: DataResponse, panelKey: string): PanelItem {
    if (rawData) {
      let result: PanelItem = new PanelItem("", "", null);
      let data = rawData.items[panelKey];
      switch (panelKey) {
        case "Fidelity": 
          result.title = fidDisplayTitle;
          result.displayUrl = fidDisplayImageUrl;
          result.dataArray = data;
          result.color = "#009933";
          result.hidden = environment.production ? true : false;
          result.active = false;
          break;
        case "Empower": 
          result.title = empDisplayTitle;
          result.displayUrl = empDisplayImageUrl;
          result.dataArray = data;
          result.color = "#b32d00";
          result.hidden = environment.production ? true : false;
          result.active = false;
          break;
        case "Ascensus": 
          result.title = ascDisplayTitle;
          result.displayUrl = ascDisplayImageUrl;
          result.dataArray = data;
          result.color = "#1a1aff";
          result.hidden = environment.production ? true : false;
          result.active = environment.production ? true : false;
          break;
        default:
          result.title = "New Title";
          result.displayUrl = "";
          result.dataArray = null;
      };
      return result;
    }
  }

  setDataForGraph(graphData: PanelItem[], graphConfig?: any) {
    let resultGraphData: ChartGraphData = new ChartGraphData([]);
    
    // non-active panels is part of average calculations
    let nonActivePanels: PanelItem[] = [];

    for (let data of graphData) {
      if (!data.isActive()) {
        nonActivePanels.push(data);
      }
      resultGraphData.datasets.push({
        label: data.getTitle(),
        fill: false,
        borderColor: data.getColor(),
        data: this.convertGraphData(data.getDataArray()),
        hidden: data.isHidden(),
        spanGaps: true
      });
    }

    // add another dataset to be graphed, this will be the average set
    if (nonActivePanels.length > 1) {
      let avgDataPoint: ChartDataPoint[] = this.caluclateAverageDataset(nonActivePanels);
      resultGraphData.datasets.push({
        label: "Average",
        fill: false,
        borderColor: "#0086b3",
        data: avgDataPoint,
        hidden: false,
        spanGaps: true
      });
    }
    
    this.gs.setGraphConfig();
    this.gs.setGraphData(resultGraphData);
  }


  /**
   * Returns an array of x, y data points
   * @param dataArray 
   */
  convertGraphData(dataArray: ItemDetail[]): ChartDataPoint[] {
    let dataPointsArray: ChartDataPoint[] = [];
    for (let data of dataArray) {
      dataPointsArray.push(new ChartDataPoint(data.date, data.balance));
    }
    return dataPointsArray;
  }


  /**
   * Calculates the average for the datasets that are NOT active
   * 
   * Step 1: Find the longest dataset
   * Step 2: Using the longest dataset as base  array for datapoint X-axis, date
   *         Calculate the average for that data for all datasets
   *         If a dataset is missing the date compared to the base array, add the 
   *           balance of the base array to itself again
   * Step 3: Construct the ChartDataPoint[] array
   * 
   * 
   * @param {PanelItem[]} datasets 
   * @return {ChartDataPoint[]} averageArray
   */
  caluclateAverageDataset(datasets: PanelItem[]): ChartDataPoint[] {
    let averageArray: ChartDataPoint[] = [];

    // get longest dataset as base dataset
    let longestDataset: PanelItem = datasets[0];
    for (let i=0; i<datasets.length; i++) {
      if (datasets[i].dataArray.length > longestDataset.dataArray.length) {
        longestDataset = datasets[i];
      }
    }
    //console.log(longestDataset)

    // calculate the average of the datasets, and store in averageArray
    for (let i=0; i<longestDataset.dataArray.length; i++) {
      let totalBalance: number = 0;
      let currentDate = longestDataset.dataArray[i].date;
      for (let dataset of datasets) {
        let item: ItemDetail = _.find(dataset.dataArray, ['date', currentDate]);
        if (item) {
          totalBalance = totalBalance + item.balance;
        } else {
          totalBalance = totalBalance + longestDataset.dataArray[i].balance;
        }
        
      }
      let avg = totalBalance / datasets.length;
      averageArray.push(new ChartDataPoint(currentDate, avg));
    }

    return averageArray;
  }

}