import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-shell-pricing',
	standalone: false,
	templateUrl: './shell-pricing.component.html',
	styleUrl: './shell-pricing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellPricingComponent {
	plans = [
		{
			name: 'شروع',
			price: 'رایگان',
			popular: false,
			features: ['۱ حساب متصل', '۱۰۰۰ درخواست/ماه', 'پشتیبانی ایمیلی'],
		},
		{
			name: 'شروع',
			price: '10$/ماه',
			popular: false,
			features: ['۱ حساب متصل', '۱۰۰۰۰ درخواست/ماه', 'پشتیبانی اولویت‌دار'],
		},
		{
			name: 'حرفه‌ای',
			price: '۹۹$/ماه',
			popular: true,
			features: ['۵ حساب متصل', '۱۰۰۰۰ درخواست/ماه', 'هشدارهای لحظه‌ای', 'پشتیبانی اولویت‌دار'],
		},
		{
			name: 'سازمانی',
			price: 'تماس بگیرید',
			popular: false,
			features: ['حساب‌های نامحدود', 'SLA اختصاصی', 'امنیت پیشرفته'],
		},
	];

}
