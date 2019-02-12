import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartOptions } from "chart.js";

export class GraphService {

  @Output() 
  onGraphDataChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onGraphConfigChange: EventEmitter<any> = new EventEmitter<any>();

  graphData: any;
  graphConfig: any;
  graphSize: string;

  constructor() {
    this.onInit();
  }

  onInit() {
  }

  setDetailMode(detail: boolean = false) {
  }

  setGraphData(graphData: any = DEFAULT_GRAPH_DATA) {
    this.graphData = graphData;
    this.onGraphDataChange.emit(this.graphData);
  }

  setGraphConfig(graphConfig: any = DEFAULT_GRAPH_CONFIG) {
    this.graphConfig = graphConfig;
    this.onGraphConfigChange.emit(this.graphConfig);
  }

}

/*************************
 * CONSTANTS
 **************************/
const DEFAULT_GRAPH_CONFIG = {
  maintainAspectRatio: false,
  responsive: true,
  title: {
    display: true,
    text: "SiLing Graph"
  },
  scales: {
    xAxes: [{
      type: "time",
      time: {
        parser: 'MM/DD/YYYY',
        tooltipFormat: 'll'
      },
      scaleLabel: {
        display: true,
        labelString: 'Date'
      }
    }],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Dollar $',
      },
      ticks: {
        callback: function(value, index, values) {
          return '$' + (value / 1000) + "k";
        }
      }
    }]
  },
  tooltips: {
		position: 'average',
		mode: 'nearest',
    intersect: false,
    yPadding: 10,
    xPadding: 10,
    caretSize: 4,
    backgroundColor: '#cce6ff',
    titleFontColor: "#000",
    bodyFontColor: "#000",
    borderColor: '#001a33',
    borderWidth: 2,
    callbacks: {
      title: function(toolTipItems, data) {
        return toolTipItems[0]['xLabel'] +
         " : ~ $" + (Math.floor(toolTipItems[0]['yLabel']* 100) / 100000).toString().slice(0,-3) + "k";
      }
    }
  },
};

const DEFAULT_GRAPH_DATA = {
  datasets: [{
    label: "US Dates",
    data: [{
        x: "04-01-2014", y: 175
    }, {
        x: "10-01-2014", y: 175
    }, {
        x: "04-01-2015", y: 178
    }, {
        x: "10-01-2015", y: 178
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