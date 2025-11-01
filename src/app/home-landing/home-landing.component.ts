import {
	Component,
	OnInit,
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	inject, ViewChild, ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';

import {
	ApexAxisChartSeries,
	ApexChart,
	ApexDataLabels,
	ApexXAxis,
	ApexStroke,
	ApexGrid,
	ApexMarkers,
	ApexYAxis,
	ApexFill,
	ApexTooltip,
	ApexLegend,
	ApexResponsive,
	ApexTheme,
} from 'ng-apexcharts';
import { HomeLandingApiService } from './Service/home-landing-api.service';

declare let L: any;

// src/app/home/models.ts
export interface Feature {
	icon: string;
	title: string;
	desc: string;
	kpi?: string;
}

export interface Dataset {
	id: string;
	title: string;
	category: string;
	description: string;
	tags: string[];
	rating: number;
	records: number;
	updatedAt: string;
	price: 'free' | 'trial' | 'premium';
	thumbnail: string;
	geo?: [number, number]; // [lat, lng]
}

export interface Testimonial {
	id: string;
	name: string;
	role: string;
	avatar: string;
	rating: number;
	quote: string;
	companyLogo?: string;
}

export interface Logo {
	id: string;
	name: string;
	src: string;
}

export type ChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	dataLabels: ApexDataLabels;
	stroke: ApexStroke;
	xaxis: ApexXAxis;
	yaxis: ApexYAxis;
	grid: ApexGrid;
	markers: ApexMarkers;
	fill: ApexFill;
	tooltip: ApexTooltip;
	legend: ApexLegend;
	responsive: ApexResponsive[];
	theme: ApexTheme;
};

@Component({
	selector: 'app-home-landing',
	standalone: false,
	templateUrl: './home-landing.component.html',
	styleUrl: './home-landing.component.scss',
})
export class HomeLandingComponent implements OnInit, AfterViewInit {
	@ViewChild('contactMap') contactMap!: ElementRef<HTMLDivElement>;

	items: MenuItem[] = [];
	isDark = false;

	chartOptions!: Partial<ChartOptions>;

	subscribeForm!: FormGroup;

	stats = [
		{label: 'پرسوناهای هدف', value: 12435},
		{label: 'لیدهای یونیک', value: 1860},
		{label: 'AI شخصی‌سازی', value: 1, suffix: 'x'},
		{label: 'رشد ROI کمپین', value: 2000, suffix: '%'},
	];

	features = [
		{
			icon: 'fa-chart-line',
			title: 'موتور مدرن تحلیل',
			desc: 'داشبورد زنده، KPIهای کلیدی و گزارش‌گیری بی‌درنگ.',
		},
		{
			icon: 'fa-wand-magic-sparkles',
			title: 'اتوماسیون هوشمند',
			desc: 'سفارشی‌سازی پیام‌ها با AI و الگوهای آماده.',
		},
		{
			icon: 'fa-shield-heart',
			title: 'امنیت و حریم خصوصی',
			desc: 'استانداردهای امنیتی سطح سازمانی و کنترل دسترسی.',
		},
	];

	whoWeHelp = [
		{
			title: 'رهبران فروش',
			desc: 'مقیاس‌پذیری عملیات و دسترسی به دید 360 درجه.',
			icon: 'fa-user-tie',
		},
		{
			title: 'C‑Suite',
			desc: 'تصمیم‌گیری مبتنی بر داده و ریسک کمتر.',
			icon: 'fa-building-columns',
		},
		{
			title: 'Founders',
			desc: 'رشد سریع بدون خطاهای پرهزینه.',
			icon: 'fa-lightbulb',
		},
	];

	blogPosts = [
		{
			title: '۱۰ اشتباه رایج در گزارش‌های شبکه‌های اجتماعی',
			date: '۱۴۰۳/۰۴/۱۵',
			cover: 'assets/cover-1.webp',
		},
		{
			title: 'راهنمای نهایی ساخت بولتن تحلیلی',
			date: '۱۴۰۳/۰۴/۲۲',
			cover: 'assets/cover-2.webp',
		},
		{
			title: 'چطور KPIهای درست را انتخاب کنیم؟',
			date: '۱۴۰۳/۰۴/۲۹',
			cover: 'assets/cover-3.webp',
		},
	];

	logos = [
		'assets/logos/1.svg',
		'assets/logos/2.svg',
		'assets/logos/3.svg',
		'assets/logos/4.svg',
		'assets/logos/5.svg',
		'assets/logos/6.svg',
	];

	recentSignals = [
		{network: 'X', volume: 9321, sentiment: 'مثبت', time: '۲ دقیقه پیش'},
		{network: 'Instagram', volume: 5412, sentiment: 'خنثی', time: '۱۰ دقیقه پیش'},
		{network: 'Facebook', volume: 3110, sentiment: 'منفی', time: '۲۵ دقیقه پیش'},
	];

	constructor(private fb: FormBuilder, private toast: MessageService) {
		this.subscribeForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
		});
	}

	ngOnInit(): void {
		this.items = [
			{label: 'ویژگی‌ها', command: () => this.scrollTo('features')},
			{label: 'مطالعات موردی', command: () => this.scrollTo('case')},
			{label: 'بلاگ', command: () => this.scrollTo('blog')},
			{label: 'تماس', command: () => this.scrollTo('contact')},
			{
				label: 'تغییر تم',
				icon: 'pi pi-sun',
				command: () => this.toggleTheme(),
			},
		];

		this.chartOptions = {
			series: [
				{
					name: 'نرخ تعامل',
					data: [18, 22, 20, 27, 25, 31, 29, 34, 33, 38, 41, 45],
				},
			],
			chart: {
				type: 'area',
				height: 240,
				sparkline: {enabled: true},
				toolbar: {show: false},
			},
			dataLabels: {enabled: false},
			stroke: {curve: 'smooth', width: 3},
			xaxis: {
				categories: [
					'فروردین',
					'اردیبهشت',
					'خرداد',
					'تیر',
					'مرداد',
					'شهریور',
					'مهر',
					'آبان',
					'آذر',
					'دی',
					'بهمن',
					'اسفند',
				],
				labels: {show: false},
				axisBorder: {show: false},
				axisTicks: {show: false},
			},
			grid: {show: false},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.5,
					opacityTo: 0.05,
					stops: [0, 90, 100],
				},
			},
			markers: {size: 0},
			tooltip: {theme: 'dark'},
			legend: {show: false},
			theme: {mode: 'light'},
		};
	}

	ngAfterViewInit(): void {
		setTimeout(() => this.initMap(), 0);
	}

	onSubscribe(): void {
		if (this.subscribeForm.invalid) {
			this.subscribeForm.markAllAsTouched();
			return;
		}
		this.toast.add({
			severity: 'success',
			summary: 'اشتراک ثبت شد',
			detail: 'هر ماه یک بولتن تحلیلی دریافت می‌کنید.',
			life: 3000,
		});
		this.subscribeForm.reset();
	}

	toggleTheme(): void {
		this.isDark = !this.isDark;
		document.documentElement.classList.toggle('dk-dark', this.isDark);
	}

	scrollTo(id: string): void {
		document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
	}

	private initMap(): void {
		if (!this.contactMap) return;
		const map = L.map(this.contactMap.nativeElement, {
			center: [35.6892, 51.3890],
			zoom: 11,
			scrollWheelZoom: false,
		});
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© OpenStreetMap',
		}).addTo(map);
		L.marker([35.7153, 51.4043]).addTo(map).bindPopup('دفتر DataKhana');
	}
}
