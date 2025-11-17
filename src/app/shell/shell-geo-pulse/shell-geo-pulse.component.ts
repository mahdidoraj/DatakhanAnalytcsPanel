import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
	selector: 'app-shell-geo-pulse',
	standalone: false,
	templateUrl: './shell-geo-pulse.component.html',
	styleUrl: './shell-geo-pulse.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ShellGeoPulseComponent implements AfterViewInit {
	@ViewChild('map', {static: false}) mapEl?: ElementRef<HTMLDivElement>;
	ready = signal(false);

	async ngAfterViewInit() {
		const map = L.map(this.mapEl!.nativeElement, {zoomControl: false}).setView([35.715, 51.404], 5);
		L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
			attribution: '&copy; OpenStreetMap, &copy; CARTO',
		}).addTo(map);
		const samples: [number, number, string][] = [
			[35.6892, 51.3890, 'تهران'], [32.6539, 51.6660, 'اصفهان'], [29.5918, 52.5837, 'شیراز'], [36.2605, 59.6168, 'مشهد'],
		];
		samples.forEach(([lat, lng, city]) => {
			const m = L.marker([lat, lng]).addTo(map);
			m.bindPopup(`<b>${ city }</b><br>منشن‌ها: ${ (100 + Math.floor(Math.random() * 300)) }`);
		});
		this.ready.set(true);
	}
}
