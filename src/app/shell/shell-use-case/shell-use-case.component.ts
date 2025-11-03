import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-shell-use-case',
	standalone: false,
	templateUrl: './shell-use-case.component.html',
	styleUrl: './shell-use-case.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ShellUseCaseComponent {
	cards = [
		{icon: 'fa-solid fa-bullhorn', title: 'مانیتورینگ برند', text: 'آگاهی از احساس و ترندهای پیرامون برند.'},
		{icon: 'fa-solid fa-chart-line', title: 'تحلیل کمپین', text: 'ارزیابی عملکرد و بازگشت بازاریابی.'},
		{icon: 'fa-solid fa-user-ninja', title: 'پایش رقبا', text: 'ردیابی حرکت رقبا و سهم گفتگو.'},
	];
}
