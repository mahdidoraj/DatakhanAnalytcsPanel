import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-shell-faq',
	standalone: false,
	templateUrl: './shell-faq.component.html',
	styleUrl: './shell-faq.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellFaqComponent {
	q: string = '';

	get filteredFaqs() {
		const term = this.q?.trim();
		if (!term) return this.faqs;

		const t = term.toLowerCase();
		return this.faqs.filter(f =>
			f.q?.toLowerCase().includes(t) || f.a?.toLowerCase().includes(t),
		);
	}

	faqs = [
		{q: 'آیا از زبان فارسی پشتیبانی می‌شود؟', a: 'بله، تحلیل احساسات فارسی پشتیبانی می‌شود.'},
		{q: 'چگونه حساب‌ها را متصل کنم؟', a: 'از طریق داشبورد و احراز هویت امن OAuth.'},
		{q: 'آیا دیتای خام قابل دانلود است؟', a: 'بله در پلن حرفه‌ای و بالاتر.'},
		{q: 'هشدارها چگونه ارسال می‌شوند؟', a: 'از طریق ایمیل و وب‌هوک.'},
		{q: 'آیا API دارید؟', a: 'بله، REST/GraphQL برای استفاده توسعه‌دهندگان فراهم است.'},
		{q: 'آیا محدودیت درخواست وجود دارد؟', a: 'بله، بر اساس پلن انتخابی.'},
	];

}
