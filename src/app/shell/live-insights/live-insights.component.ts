import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
	selector: 'app-live-insights',
	standalone: false,
	templateUrl: './live-insights.component.html',
	styleUrl: './live-insights.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LiveInsightsComponent {
	loaded = signal(false);
	kpis = signal({posts:12450, mentions:3821, sentiment:62});

	ngOnInit(){ setTimeout(()=>this.loaded.set(true), 900); }

	areaSeries: ApexAxisChartSeries = [
		{ name:'منشن‌ها', data:[540,620,580,760,690,810,740] }
	];
	areaChart: ApexChart = {
		type:'area', height:280, toolbar:{show:false}, foreColor:'#9CA3AF',
		animations:{enabled:true},
		events:{
			legendClick: (_c, idx)=>console.debug('[analytics] chart_legend_toggle',{seriesIndex:idx})
		}
	};
	xAxis: ApexXAxis = { categories:['شنبه','یکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه'], labels:{style:{colors:'#9CA3AF'}}, axisBorder:{show:false}, axisTicks:{show:false}};
	fill: ApexFill = { type:'gradient', gradient:{shade:'dark', type:'vertical', opacityFrom:.45, opacityTo:.05, gradientToColors:['#B7860B']}};
	dataLabels: ApexDataLabels = { enabled:false };
	stroke: ApexStroke = { curve:'smooth', width:2, colors:['#E8C547'] };
	tooltip: ApexTooltip = { theme:'dark' };
	legend: ApexLegend = { show:true, onItemClick:{ toggleDataSeries:true } };

	donutSeries: ApexNonAxisChartSeries = [50,35,15];
	donutChart: ApexChart = {
		type:'donut', height:280, foreColor:'#9CA3AF',
		events:{ legendClick: (_c, idx)=>console.debug('[analytics] chart_legend_toggle',{seriesIndex:idx}) }
	};
	donutResponsive: ApexResponsive[] = [{ breakpoint:992, options:{ chart:{height:260} } }];
	donutOptions: ApexPlotOptions = { pie:{ donut:{ size:'65%', labels:{ show:true, total:{show:true, label:'سهم', color:'#E8C547'} } } } };
}
