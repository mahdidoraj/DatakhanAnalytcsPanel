import { Component, Input } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexLegend, ApexAxisChartSeries } from 'ng-apexcharts';

@Component({
	selector: 'ws-chart-keywords-treemap',
	standalone: false,
	template: `
		<div class="ws-card p-3">
			<apx-chart [series]="series" [legend]="legend" [chart]="chart" [dataLabels]="dataLabels"></apx-chart>
		</div>`,
})
export class WsChartKeywordsTreemapComponent {
	@Input() items: { label: string; value: number }[] = [];
	chart: ApexChart = {type: 'treemap', height: 320};
	legend: ApexLegend = {show: false};
	dataLabels: ApexDataLabels = {
		enabled: true,
		formatter: (v: any, o: any) => o.w.config.series[o.seriesIndex].data[o.dataPointIndex].x,
	};

	get series(): ApexAxisChartSeries {
		return [{name: 'Keywords', data: this.items.map(i => ({x: i.label, y: i.value}))}];
	}
}
