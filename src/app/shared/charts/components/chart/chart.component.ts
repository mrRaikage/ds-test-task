import { Component, Input, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';

import { getChartSettings } from '../../../utils/chart-settings';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {
  @Input() title: string;
  @Input() chartlabels: string[];
  @Input() chartValues: number[];

  constructor() { }

  ngOnChanges() {
    const myChart = new Chart('myChart', getChartSettings(this.title, this.chartlabels, this.chartValues));
  }
}
