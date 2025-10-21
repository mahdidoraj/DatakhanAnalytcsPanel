import { Component, Input } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
	selector: 'ws-skeleton',
	standalone:false,
	template: `  <div class="d-flex flex-column gap-3">
		<div class="border rounded-4 p-3" *ngFor="let i of arr">
			<p-skeleton height="10px" styleClass="mb-2" width="40%"></p-skeleton>
			<p-skeleton height="10px" styleClass="mb-2" width="90%"></p-skeleton>
			<p-skeleton height="10px" styleClass="mb-2" width="75%"></p-skeleton>
			<div class="d-flex gap-2 mt-2">
				<p-skeleton width="80px" height="28px" styleClass="rounded-pill"></p-skeleton>
				<p-skeleton width="60px" height="28px" styleClass="rounded-pill"></p-skeleton>
				<p-skeleton width="90px" height="28px" styleClass="rounded-pill"></p-skeleton>
			</div>
		</div>
	</div>
	`
})
export class WsSkeletonComponent {

	@Input() count = 5;
	get arr() { return Array.from({length: this.count}); }
}
