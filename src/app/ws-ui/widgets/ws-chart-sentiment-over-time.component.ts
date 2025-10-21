import { Component, Input, OnChanges } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexFill, ApexXAxis, ApexLegend, ApexTooltip, ApexResponsive } from 'ng-apexcharts';

@Component({
	selector: 'ws-chart-sentiment-over-time',
	standalone:false,
	template: `<div class="ws-card p-3"><apx-chart
    [series]="series"
    [chart]="chart"
    [dataLabels]="dataLabels"
    [stroke]="stroke"
    [fill]="fill"
    [xaxis]="xaxis"
    [legend]="legend"
    [tooltip]="tooltip"
    [responsive]="responsive">
  </apx-chart></div>`
})
export class WsChartSentimentOverTimeComponent implements OnChanges {
	@Input() series: ApexAxisChartSeries = [];
	chart: ApexChart = { type: 'area', height: 320, stacked: true, toolbar: { show: true } };
	dataLabels: ApexDataLabels = { enabled: false };
	stroke: ApexStroke = { curve: 'smooth' };
	fill: ApexFill = { type: 'gradient' };
	xaxis: ApexXAxis = { type: 'datetime' };
	legend: ApexLegend = { position: 'top' };
	tooltip: ApexTooltip = { shared: true };
	responsive: ApexResponsive[] = [{ breakpoint: 768, options: { chart: { height: 260 } } }];
	ngOnChanges() {}
}
