import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
	selector: 'ws-theme-toggle',
	standalone:false,
	template: `
		<div class="ws-card p-3 d-inline-flex align-items-center ws-gap">
			<i class="fa-regular fa-moon"></i>
			<p-inputSwitch [ngModel]="theme.isDark()" (onChange)="theme.toggle()"></p-inputSwitch>
		</div>`,
})
export class WsThemeToggleComponent {
	constructor(public theme: ThemeService) {
	}
}
