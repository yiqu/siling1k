import { Component, OnInit, ViewChild, Input, 
  OnChanges, SimpleChange } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: 'graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit, OnChanges {

  @Input("graphData")
  data: any;

  @Input("graphConfig")
  config: any

  @ViewChild('lineChart') 
  private chartRef;

  chart: any;


  /**
   * Constructor
   */
  constructor() {}

  ngOnInit() {
    this.createGraph();
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
   // console.log("data: ", changes.data.currentValue);
   // console.log("config: ", changes.config.currentValue);

  }

  createGraph() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: this.data,
      options: {
        responsive: true,
        title:      {
            display: true,
            text:    "Overview"
        },
        scales:     {
          xAxes: [{
              type:       "time",
              time:       {
                  parser: 'MM/DD/YYYY',
                  tooltipFormat: 'll'
              },
              scaleLabel: {
                  display:     true,
                  labelString: 'Date'
              }
          }],
          yAxes: [{
              scaleLabel: {
                  display:     true,
                  labelString: 'value'
              }
          }]
        }
      }
    });
    //console.log(this.chart)
  }
  
}