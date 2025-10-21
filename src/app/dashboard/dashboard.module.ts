import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAllModule } from '../shared-all/shared-all.module';
import { WsUiModule } from '../ws-ui/ws-ui.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	declarations: [
		DashboardComponent,
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		SharedAllModule,
		WsUiModule,
	],
})
export class DashboardModule {
}
