import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type Row = {
	network: 'X' | 'Instagram' | 'Facebook',
	date: string,
	text: string,
	sentiment: 'مثبت' | 'خنثی' | 'منفی',
	engagement: number
};

@Component({
	selector: 'app-shell-table-data',
	standalone: false,
	templateUrl: './shell-table-data.component.html',
	styleUrl: './shell-table-data.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ShellTableDataComponent {
	loaded = signal(false);
	globalFilter = '';
	selectedNetwork?: string;

	rows: Row[] = Array.from({length: 15}).map((_, i) => ({
		network: (['X', 'Instagram', 'Facebook'] as const)[i % 3],
		date: new Date(Date.now() - i * 86400000).toLocaleDateString('fa-IR'),
		text: ['رشد گفتگو درباره برند', 'بازخورد مثبت مشتریان', 'انتقاد نسبت به خدمات', 'پست کمپین جدید', 'بحث درباره رقیب'][i % 5],
		sentiment: (['مثبت', 'خنثی', 'منفی'] as const)[i % 3],
		engagement: 100 + (i * 13) % 700,
	}));

	networks = [{label: 'X'}, {label: 'Instagram'}, {label: 'Facebook'}];

	ngOnInit() {
		setTimeout(() => this.loaded.set(true), 900);
	}

	filtered() {
		return this.rows.filter(r => {
			const f = this.globalFilter.trim();
			const networkOk = this.selectedNetwork ? r.network === this.selectedNetwork : true;
			const textOk = !f || Object.values(r).join(' ').includes(f);
			return networkOk && textOk;
		});
	}

	onFilter() {
	} // triggers change detection

	icon(n: string) {
		return n === 'X' ? 'fa-brands fa-x-twitter' : n === 'Instagram' ? 'fa-brands fa-instagram' : 'fa-brands fa-facebook-f';
	}

	badgeClass(s: 'مثبت' | 'خنثی' | 'منفی') {
		return s === 'مثبت' ? 'badge-positive' : s === 'خنثی' ? 'badge-neutral' : 'badge-negative';
	}

}
