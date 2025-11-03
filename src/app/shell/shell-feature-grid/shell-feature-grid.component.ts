import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-shell-feature-grid',
	standalone: false,
	templateUrl: './shell-feature-grid.component.html',
	styleUrl: './shell-feature-grid.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellFeatureGridComponent {
	features = [
		{icon: 'fa-solid fa-plug', title: 'اتصال مستقیم به X/IG/FB', desc: 'اتصال امن و پایدار به API‌ها با مدیریت نرخ درخواست.'},
		{icon: 'fa-solid fa-broom', title: 'پاکسازی و نرمال‌سازی داده', desc: 'حذف نویز، نرمال‌سازی زبان و ساختاردهی متون.'},
		{
			icon: 'fa-solid fa-face-smile',
			title: 'تحلیل احساسات چندزبانه',
			desc: 'پشتیبانی فارسی، انگلیسی و عربی با مدل‌های سفارشی.',
		},
		{icon: 'fa-solid fa-bell', title: 'هشدارهای لحظه‌ای', desc: 'تنظیم آستانه‌ها و اعلان‌های بلادرنگ.'},
	];
}
