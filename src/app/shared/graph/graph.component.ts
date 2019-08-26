import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChange } from '@angular/core';
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
  @Input()
  size: string;
  @ViewChild('lineChart', { static: true }) 
  private chartRef;

  chart: any;
  graphData: any;
  graphConfig: any;
  graphSize: string;

  /**
   * Constructor
   */
  constructor() {
  }

  ngOnInit() {
    this.createGraph();
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  }

  createGraph() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: this.data,
      options: this.config
    });
  }
  
}