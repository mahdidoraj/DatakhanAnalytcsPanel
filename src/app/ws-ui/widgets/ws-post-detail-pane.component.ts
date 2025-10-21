import { Component, Input } from '@angular/core';
import { WsModelInfo, WsPost } from '../ws-types';

@Component({
	selector: 'ws-post-detail-pane',
	standalone: false,
	template: `
		<div class="ws-card p-3" *ngIf="post">
			<div class="d-flex justify-content-between">
				<div>
					<h5 class="mb-1">{{post.account}} · <small class="ws-muted">{{post.network}}</small></h5>
					<small class="ws-muted">{{post.datetime | date:'medium'}}</small>
				</div>
				<p-tag [value]="post.sentiment"></p-tag>
			</div>
			<p class="mt-3">{{post.text}}</p>
			<div class="mt-2" *ngIf="post.files?.length">
				<a *ngFor="let f of post.files" [href]="f" target="_blank" class="me-2"><i class="fa-regular fa-file"></i></a>
			</div>
			<div class="mt-3 ws-muted" *ngIf="modelInfo">
				<small>Confidence: {{modelInfo.confidence || 0 | number:'1.0-2'}}</small>
				<ul *ngIf="modelInfo.reasons?.length"><li *ngFor="let r of modelInfo.reasons">{{r}}</li></ul>
			</div>
		</div>`
})
export class WsPostDetailPaneComponent {
	@Input() post?: WsPost | null;
	@Input() modelInfo?: WsModelInfo | null;
}
