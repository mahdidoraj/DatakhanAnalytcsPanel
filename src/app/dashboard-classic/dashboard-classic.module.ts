import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAllModule } from '../shared-all/shared-all.module';
import { WsUiModule } from '../ws-ui/ws-ui.module';

import { DashboardClassicRoutingModule } from './dashboard-classic-routing.module';
import { DashboardClassicComponent } from './dashboard-classic.component';

@NgModule({
	declarations: [
		DashboardClassicComponent,
	],
	imports: [
		CommonModule,
		DashboardClassicRoutingModule,
		SharedAllModule,
		WsUiModule,
	],
})
export class DashboardClassicModule {
}
