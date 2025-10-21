import { Component, Input } from '@angular/core';
import { ApexChart, ApexLegend, ApexResponsive } from 'ng-apexcharts';

@Component({
	selector: 'ws-chart-network-share-donut',
	standalone:false,
	template: `<div class="ws-card p-3">
    <apx-chart [labels]="labels" [series]="values" [chart]="chart" [legend]="legend" [responsive]="responsive"></apx-chart>
  </div>`
})
export class WsChartNetworkShareDonutComponent {
	@Input() data: {network:string; value:number}[] = [];
	chart: ApexChart = { type: 'donut', height: 320 };
	legend: ApexLegend = { position: 'right' };
	responsive: ApexResponsive[] = [{ breakpoint: 768, options:{ legend:{ position:'bottom' } } }];
	get labels(){ return this.data.map(d=>d.network); }
	get values(){ return this.data.map(d=>d.value); }
}
