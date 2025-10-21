import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
	selector: 'ws-empty-state',
	standalone:false,
	template: `
		<div class="text-center p-4 border rounded-4 bg-white">
			<div class="display-6 mb-2"><i [class]="icon"></i></div>
			<h5 class="mb-1">{{title}}</h5>
			<p class="text-muted mb-3">{{subtitle}}</p>
			<button *ngIf="actionLabel" pButton class="btn btn-primary" [label]="actionLabel" (click)="action.emit()"></button>
		</div>`
})
export class WsEmptyStateComponent {
	@Input() icon: string = 'fas fa-inbox';
	@Input() title: string = 'موردی پیدا نشد';
	@Input() subtitle: string = 'فیلترها را تغییر دهید و دوباره تلاش کنید';
	@Input() actionLabel?: string;
	@Output() action = new EventEmitter<void>();
}
