import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WsPost, WsSentiment } from '../ws-types';

@Component({
	selector: 'ws-review-queue',
	standalone:false,
	template: `
  <div class="ws-card p-3">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h5 class="m-0">Review Queue</h5>
      <div class="d-flex gap-2">
        <button pButton label="Approve Selected" (click)="bulk('approve')"></button>
        <button pButton label="Reject Selected" class="p-button-danger" (click)="bulk('reject')"></button>
      </div>
    </div>

    <p-table [value]="items" [(selection)]="selection" dataKey="id" [rows]="10" [paginator]="true">
      <ng-template pTemplate="header">
        <tr>
          <th style="width:3rem"><p-tableHeaderCheckbox></p-tableHeaderCheckbox></th>
          <th>Date</th><th>Network</th><th>Account</th><th>Text</th><th>Sentiment</th><th style="width:200px">Actions</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-r>
        <tr>
          <td><p-tableCheckbox [value]="r"></p-tableCheckbox></td>
          <td>{{r.datetime | date:'short'}}</td>
          <td>{{r.network}}</td>
          <td>{{r.account}}</td>
          <td><span pTooltip="{{r.text}}">{{r.text | slice:0:60}}{{r.text.length>60?'…':''}}</span></td>
          <td><p-tag [value]="r.sentiment"></p-tag></td>
          <td class="d-flex gap-2">
            <button pButton icon="fas fa-check" class="p-button-success p-button-sm" (click)="approve.emit(r)"></button>
            <button pButton icon="fas fa-times" class="p-button-danger p-button-sm" (click)="reject.emit(r)"></button>
            <p-dropdown [options]="sentimentOptions" [(ngModel)]="r.sentiment" (onChange)="onChangeSent(r)"></p-dropdown>
          </td>
        </tr>
      </ng-template>
    </p-table>
  </div>`,
})
export class WsReviewQueueComponent {
	@Input() items: WsPost[] = [];
	@Output() approve = new EventEmitter<WsPost>();
	@Output() reject = new EventEmitter<WsPost>();
	@Output() changeSentiment = new EventEmitter<{post:WsPost, sentiment:WsSentiment}>();
	selection: WsPost[] = [];
	sentimentOptions: WsSentiment[] = ['positive','neutral','negative'] as any;

	bulk(type:'approve'|'reject'){
		(this.selection || []).forEach(p => type==='approve' ? this.approve.emit(p) : this.reject.emit(p));
		this.selection = [];
	}
	onChangeSent(post:WsPost){ this.changeSentiment.emit({ post, sentiment: post.sentiment }); }
}
