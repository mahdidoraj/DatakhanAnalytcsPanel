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
		{name: 'شروع', price: 'رایگان', features: ['۱ حساب متصل', '۱۰۰۰ درخواست/ماه', 'پشتیبانی ایمیلی']},
		{
			name: 'حرفه‌ای',
			price: '۹۹$/ماه',
			features: ['۵ حساب متصل', '۱۰۰۰۰ درخواست/ماه', 'هشدارهای لحظه‌ای', 'پشتیبانی اولویت‌دار'],
		},
		{name: 'سازمانی', price: 'تماس بگیرید', features: ['حساب‌های نامحدود', 'SLA اختصاصی', 'امنیت پیشرفته']},
	];

}
