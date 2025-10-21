// src/app/ui/widgets/ws-kpi-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
	selector: 'ws-kpi-card',
	standalone: false,
	template: `
		<div class="card shadow-sm border-0 rounded-4 h-100">
			<div class="card-body d-flex align-items-start gap-3">
				<p-avatar [icon]="icon" size="xlarge" shape="square"></p-avatar>
				<div class="flex-fill">
					<div class="text-muted small mb-1">{{ title }}</div>
					<div class="d-flex align-items-baseline gap-2">
						<div class="h4 fw-bolder mb-0">
							{{ value | number }}{{ unit || '' }}
						</div>
						<small [class.text-success]="delta>=0" [class.text-danger]="delta<0">
							{{ delta > 0 ? '+' + delta : delta }}%
						</small>
					</div>
					<p-progressBar [value]="Math.min(100, Math.abs(delta||0)*9)"></p-progressBar>
				</div>
			</div>
		</div>
	`,
	styles: [`
		.kpi-icon {
			width: 56px;
			height: 56px;
			background: linear-gradient(135deg, #e8e6ff, #f5f3ff);
			color: #6f50ff;
			font-size: 1.25rem;
		}
	`],
})
export class WsKpiCardComponent {
	@Input() title!: string;
	@Input() value!: number;
	@Input() unit?: string;
	@Input() delta: number = 0;
	@Input() icon: string = 'fas fa-chart-line';
	protected readonly Math = Math;
}
