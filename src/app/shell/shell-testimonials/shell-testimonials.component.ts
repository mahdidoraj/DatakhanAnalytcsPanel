import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-shell-testimonials',
	standalone: false,
	templateUrl: './shell-testimonials.component.html',
	styleUrl: './shell-testimonials.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellTestimonialsComponent {
	items = [
		{
			name: 'نیلوفر رضایی',
			role: 'مدیر مارکتینگ',
			text: 'هشدارهای لحظه‌ای واقعاً تصمیم‌گیری را سریع‌تر کرد.',
			avatar: '/assets/girl.webp',
		},
		{
			name: 'علی زمانی',
			role: 'تحلیل‌گر داده',
			text: 'پاکسازی چندزبانه به‌خوبی نویز را حذف می‌کند.',
			avatar: '/assets/boy.webp',
		},
		{name: 'سارا مرادی', role: 'مدیر برند', text: 'گزارش‌های آماده باعث صرفه‌جویی زمان شد.', avatar: '/assets/girl.webp'},
	];
}
