import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WsPost } from '../ws-types';

@Component({
	selector: 'ws-top-posts-table',
	standalone:false,
	template: `
  <div class="ws-card p-3">
    <p-table [value]="rows" [paginator]="true" [rows]="20" [scrollable]="true" scrollHeight="400px"
             [resizableColumns]="true" selectionMode="multiple" dataKey="id" [virtualScroll]="true"
             [virtualScrollItemSize]="48">
      <ng-template pTemplate="header">
        <tr>
          <th pResizableColumn>Date</th>
          <th pResizableColumn>Network</th>
          <th pResizableColumn>Account</th>
          <th pResizableColumn>Text</th>
          <th pResizableColumn>Media</th>
          <th pResizableColumn>Likes</th>
          <th pResizableColumn>Comments</th>
          <th pResizableColumn>Shares</th>
          <th pResizableColumn>Sentiment</th>
          <th style="width:80px"></th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-r>
        <tr>
          <td>{{r.datetime | date:'yyyy/MM/dd HH:mm'}}</td>
          <td><p-tag [value]="r.network"></p-tag></td>
          <td>{{r.account}}</td>
          <td><span pTooltip="{{r.text}}">{{r.text | slice:0:80}}{{r.text.length>80?'…':''}}</span></td>
          <td>{{r.mediaType}}</td>
          <td>{{r.likes}}</td>
          <td>{{r.comments}}</td>
          <td>{{r.shares}}</td>
          <td>
            <p-tag [severity]="r.sentiment==='positive'?'success':(r.sentiment==='negative'?'danger':'info')" [value]="r.sentiment"></p-tag>
          </td>
          <td class="text-end">
            <button pButton icon="fas fa-eye" class="p-button-text" (click)="view.emit(r)"></button>
          </td>
        </tr>
      </ng-template>
    </p-table>
  </div>`,
})
export class WsTopPostsTableComponent {
	@Input() rows: WsPost[] = [];
	@Output() view = new EventEmitter<WsPost>();
}
