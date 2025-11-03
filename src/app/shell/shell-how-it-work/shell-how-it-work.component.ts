import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-shell-how-it-work',
	standalone: false,
	templateUrl: './shell-how-it-work.component.html',
	styleUrl: './shell-how-it-work.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellHowItWorkComponent {
	steps = [
		{title: 'اتصال حساب‌ها', desc: 'مجوزدهی امن به حساب‌های اجتماعی.'},
		{title: 'دریافت و پاکسازی', desc: 'جمع‌آوری، حذف اسپم و نرمال‌سازی.'},
		{title: 'تحلیل و مصورسازی', desc: 'الگوها، احساسات و شاخص‌ها.'},
		{title: 'هشدار و گزارش', desc: 'اعلان‌های خودکار و گزارش‌های آماده.'},
	];
}
