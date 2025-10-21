import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChartType } from 'ng-apexcharts';
type Network = 'X' | 'Instagram' | 'Facebook';
type Sentiment = 'positive' | 'neutral' | 'negative';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
	private fb = inject(FormBuilder);

	// Loading states
	loadingKpi = signal<boolean>(true);
	loadingCharts = signal<boolean>(true);
	loadingTable = signal<boolean>(true);

	// Filters
	filters = this.fb.nonNullable.group({
		q: this.fb.control<string>(''),
		range: this.fb.control<Date[] | null>(null),
		networks: this.fb.control<Network[]>(['X','Instagram','Facebook']),
		sentiments: this.fb.control<Sentiment[]>(['positive','neutral','negative']),
		media: this.fb.control<string[]>(['text','image','video','link']),
		accounts: this.fb.control<string[]>(['@brand1','@brand2']),
		lang: this.fb.control<'fa'|'en'>('fa')
	});

	// KPI
	kpis = signal([
		{ title: 'پست‌ها', value: 12540, delta: +8, icon: 'fas fa-send' },
		{ title: 'اینگیجمنت', value: 98321, delta: -2, icon: 'fas fa-bolt' },
		{ title: 'مثبت (%)', value: 62, unit: '%', delta: +3, icon: 'fas fa-smile' },
		{ title: 'اکانت‌ها', value: 431, delta: +1, icon: 'fas fa-users' }
	]);

	// Rows
	rows = signal<any[]>([]);
	filteredRows = computed(()=>{
		const q = (this.filters.value.q || '').trim().toLowerCase();
		return this.rows().filter(r => !q || r.text.toLowerCase().includes(q) || r.account.toLowerCase().includes(q));
	});

	// Charts
	timeSeries: ApexAxisChartSeries = [];
	engSeries: ApexAxisChartSeries = [];
	shareLabels = ['X','Instagram','Facebook'];
	shareSeries: ApexNonAxisChartSeries = [45, 35, 20];

	chartArea: any = { type: 'area', height: 300, stacked: true, toolbar: { show: false } };
	xaxisTime: ApexXAxis = { type: 'datetime' };
	strokeSmooth: any = { curve: 'smooth', width: 2 };
	dataLabelsOff: ApexDataLabels = { enabled: false };
	legendTop: ApexLegend = { position: 'top' };
	tooltipShared: ApexTooltip = { shared: true };
	fillGradient: ApexFill = { type: 'gradient' };
	chartBar: any = { type: 'bar', height: 300, toolbar: { show: false } };
	xaxisWeeks: ApexXAxis = { categories: ['هفته۱','هفته۲','هفته۳','هفته۴','هفته۵'] };
	chartDonut: any = { type: 'donut', height: 300 };
	legendRight: ApexLegend = { position: 'right' };
	donutResponsive: ApexResponsive[] = [{ breakpoint: 992, options: { legend: { position: 'bottom' } } }];

	// UI State
	showPost = signal<boolean>(false);
	selectedPost: any = null;

	constructor() {
		// شبیه‌سازی لودینگ
		setTimeout(()=> this.initData(), 800);
	}

	initData() {
		// mock charts
		this.timeSeries = [
			{ name: 'Positive', data: this.days(14).map((d,i)=>({ x:d, y: 45 + (i%5)*4 })) },
			{ name: 'Neutral',  data: this.days(14).map((d,i)=>({ x:d, y: 25 + (i%7)*2 })) },
			{ name: 'Negative', data: this.days(14).map((d,i)=>({ x:d, y: 12 + (i%3)*3 })) }
		];
		this.engSeries = [
			{ name: 'X', data: [12, 19, 9, 21, 15] },
			{ name: 'Instagram', data: [24, 11, 15, 19, 28] },
			{ name: 'Facebook', data: [8, 10, 6, 9, 12] }
		];

		// mock rows
		this.rows.set(Array.from({length: 40}).map((_,i)=>({
			id: String(i+1),
			datetime: new Date(Date.now() - i*36e5).toISOString(),
			network: (['X','Instagram','Facebook'] as Network[])[i%3],
			account: i%2===0 ? '@brand1' : '@brand2',
			text: `پست ${i+1} درباره پروموشن و کمپین برند...`,
			mediaType: ['text','image','video','link'][i%4],
			likes: Math.floor(40 + Math.random()*400),
			comments: Math.floor(5 + Math.random()*120),
			shares: Math.floor(2 + Math.random()*80),
			sentiment: (['positive','neutral','negative'] as Sentiment[])[i%3],
			keywords: ['brand','sale','campaign','trend','discount'].slice(0, (i%5)+1)
		})));

		this.loadingKpi.set(false);
		this.loadingCharts.set(false);
		this.loadingTable.set(false);
	}

	viewPost(r:any){ this.selectedPost = r; this.showPost.set(true); }
	exportExcel(){ /* hook */ }
	exportPDF(){ /* hook */ }

	private days(n:number){ return Array.from({length:n}).map((_,i)=> new Date(Date.now() - (n-i-1)*864e5).toISOString()); }

}
