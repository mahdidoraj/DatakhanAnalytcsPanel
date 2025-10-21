import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WsFilters, WsSentiment } from '../ws-types';

@Component({
	selector: 'ws-filter-bar',
	standalone: false,
	template: `
		<div class="ws-card p-3">
			<form [formGroup]="form" class="grid align-items-end">
				<div class="col-12 md:col-3">
					<label class="mb-2 d-block">Date Range</label>
					<p-calendar formControlName="dateRange" selectionMode="range" [showIcon]="true" [touchUI]="true"
					            [showButtonBar]="true"></p-calendar>
				</div>

				<div class="col-12 md:col-2">
					<label class="mb-2 d-block">Networks</label>
					<p-multiSelect formControlName="networks" [options]="networks" [showToggleAll]="false"
					               placeholder="Select"></p-multiSelect>
				</div>

				<div class="col-12 md:col-2">
					<label class="mb-2 d-block">Accounts</label>
					<p-multiSelect formControlName="accounts" [options]="accounts" [showToggleAll]="false"
					               placeholder="@account"></p-multiSelect>
				</div>

				<div class="col-6 md:col-1">
					<label class="mb-2 d-block">Lang</label>
					<p-dropdown formControlName="language" [options]="languages"></p-dropdown>
				</div>

				<div class="col-12 md:col-2">
					<label class="mb-2 d-block">Sentiment</label>
					<p-multiSelect formControlName="sentiments" [options]="sentiments"></p-multiSelect>
				</div>

				<div class="col-12 md:col-2">
					<label class="mb-2 d-block">Media</label>
					<p-multiSelect formControlName="mediaTypes" [options]="mediaTypes"></p-multiSelect>
				</div>

				<div class="col-12 mt-3 d-flex gap-2">
					<button pButton type="button" icon="fas fa-filter" label="Apply" (click)="apply()"></button>
					<button pButton type="button" class="p-button-outlined" icon="fas fa-refresh" label="Reset"
					        (click)="reset()"></button>
				</div>
			</form>
		</div>`,
})
export class WsFilterBarComponent {
	@Input() networks: string[] = [];
	@Input() accounts: string[] = [];
	@Input() languages: string[] = ['fa', 'en'];
	@Input() sentiments: WsSentiment[] = ['positive', 'neutral', 'negative'];
	@Input() mediaTypes: string[] = ['text', 'image', 'video', 'link'];
	@Input() dateRange?: { start: Date | string; end: Date | string };
	@Output() filtersChanged = new EventEmitter<WsFilters>();

	form!: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			dateRange: [null, Validators.required],
			networks: [[] as string[]],
			accounts: [[] as string[]],
			language: ['fa', Validators.required],
			sentiments: [[] as WsSentiment[]],
			mediaTypes: [[] as string[]],
		});

	}

	ngOnInit() {
		if (this.dateRange) {
			this.form.patchValue({dateRange: [new Date(this.dateRange.start), new Date(this.dateRange.end)]});
		}
	}

	apply() {
		const dr = this.form.value.dateRange as any;
		const payload: WsFilters = {
			dateRange: {start: dr?.[0] || new Date(), end: dr?.[1] || new Date()},
			networks: this.form.value.networks || [],
			accounts: this.form.value.accounts || [],
			languages: [this.form.value.language!],
			sentiments: this.form.value.sentiments || [],
			mediaTypes: this.form.value.mediaTypes || [],
		};
		this.filtersChanged.emit(payload);
	}

	reset() {
		this.form.reset({language: 'fa'});
	}
}
