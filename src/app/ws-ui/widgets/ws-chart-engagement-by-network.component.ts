import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexLegend, ApexDataLabels, ApexStroke } from 'ng-apexcharts';

@Component({
	selector: 'ws-chart-engagement-by-network',
	standalone: false,
	template: `
		<div class="ws-card p-3">
			<div class="d-flex justify-content-end mb-2">
				<button pButton class="p-button-text" (click)="toggleType()">
					<i class="pi" [ngClass]="chart.type==='line'?'pi-chart-bar':'pi-chart-line'"></i>
				</button>
			</div>
			<apx-chart
				[series]="series"
				[chart]="chart"
				[xaxis]="xaxis"
				[legend]="legend"
				[dataLabels]="dataLabels"
				[stroke]="stroke">
			</apx-chart>
		</div>`,
})
export class WsChartEngagementByNetworkComponent {
	@Input() series: ApexAxisChartSeries = [];
	chart: ApexChart = {type: 'bar', height: 320, toolbar: {show: false}};
	xaxis: ApexXAxis = {categories: ['W1', 'W2', 'W3', 'W4', 'W5']};
	legend: ApexLegend = {position: 'top'};
	dataLabels: ApexDataLabels = {enabled: false};
	stroke: ApexStroke = {curve: 'smooth'};

	toggleType() {
		this.chart = {...this.chart, type: this.chart.type === 'bar' ? 'line' : 'bar'};
	}
}
