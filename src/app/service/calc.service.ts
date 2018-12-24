import { Injectable, Output, EventEmitter } from '@angular/core';
import { ItemDetail } from '../shared/models/data.model';
import { PanelItem } from '../shared/models/panel.model';
import { DataResponse } from '../shared/models/data.model';
import * as moment from 'moment';
import * as _ from 'lodash';
import { GraphService } from './graph.service';
import { ChartGraphData } from '../shared/models/graph-data.model';
import { ChartDataPoint } from '../shared/models/graph-datapoint.model'

const fidDisplayImageUrl: string = "assets/images/fid_logo.jpg";
const fidDisplayTitle: string = "Fidelity";
const ascDisplayImageUrl: string = "assets/images/asc_logo.jpg";
const ascDisplayTitle: string = "Ascensus";
const empDisplayImageUrl: string = "assets/images/emp_logo.png";
const empDisplayTitle: string = "Empower";

@Injectable()
export class CalcService {

  @Output()
  onDataReloaded: EventEmitter<PanelItem[]> = new EventEmitter<PanelItem[]>();

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
    this.extraData(this.rawData);
  }

  extraData(rawData: DataResponse) {
    Object.keys(rawData.items).forEach((panelKey: string) => {
      this.listOfPanels.add(panelKey);
      this.allPanelData.push(this.getPanelItemDetails(panelKey));
    });
    this.onDataReloaded.emit(this.allPanelData);
    // set graph data and emit the changes
    this.setDataForGraph(this.allPanelData);
    
  }

  getPanelItemDetails(panelKey: string): PanelItem {
    if (this.rawData) {
      let result: PanelItem = new PanelItem("", "", null);
      let data = this.rawData.items[panelKey];
      switch (panelKey) {
        case "Fidelity": 
          result.title = fidDisplayTitle;
          result.displayUrl = fidDisplayImageUrl;
          result.dataArray = data;
          result.color = "green";
          break;
        case "Empower": 
          result.title = empDisplayTitle;
          result.displayUrl = empDisplayImageUrl;
          result.dataArray = data;
          result.color = "red";
          break;
        case "Ascensus": 
          result.title = ascDisplayTitle;
          result.displayUrl = ascDisplayImageUrl;
          result.dataArray = data;
          result.color = "blue";
          break;
        default:
          result.title = "New Title";
          result.displayUrl = "";
          result.dataArray = null;
      };
      return result;
    }
  }

  getPanelDetailByName(panelId: string): PanelItem {
    return _.find(this.allPanelData, ["title", panelId]);
  }

  setDataForGraph(graphData: PanelItem[], graphConfig?: any) {
    let resultGraphData: ChartGraphData = new ChartGraphData([]);
    for (let data of graphData) {
      resultGraphData.datasets.push({
        label: data.getTitle(),
        fill: false,
        borderColor: data.getColor(),
        data: this.convertGraphData(data.getDataArray())
      })
    }
    //console.log(resultGraphData);
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

}