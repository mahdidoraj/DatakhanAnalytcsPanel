import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, group, animate, animateChild } from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	standalone: false,
	styleUrl: './app.component.scss',
	// animations: [
	// 	trigger('routeFade', [
	// 		transition('* <=> *', [
	// 			// خروج صفحه قبلی: ۱ → ۰
	// 			animate('300ms ease-out', style({ opacity: 0 })),
	// 			// ورود صفحه جدید: ۰ → ۱
	// 			animate('300ms ease-in', style({ opacity: 1 }))
	// 		])
	// 	]),
	// ],
})
export class AppComponent {
	// getState(outlet: RouterOutlet) {
	// 	if (!outlet?.isActivated) return 'root';
	// 	return this.buildFullPath(outlet.activatedRoute.snapshot);
	// }
	//
	// private buildFullPath(snapshot: ActivatedRouteSnapshot): string {
	// 	let path = '';
	// 	let current: ActivatedRouteSnapshot | null = snapshot;
	//
	// 	// این حلقه مسیر کامل رو می‌سازه حتی اگه lazy یا child باشه
	// 	while (current) {
	// 		if (current.routeConfig?.path) {
	// 			path += `/${ current.routeConfig.path }`;
	// 		}
	// 		current = current.firstChild!;
	// 	}
	//
	// 	return path || 'root';
	// }
}
