import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAllModule } from '../../shared-all/shared-all.module';

import { ShellSidebarRoutingModule } from './shell-sidebar-routing.module';
import { ShellSidebarComponent } from './shell-sidebar.component';

@NgModule({
	declarations: [
		ShellSidebarComponent,
	],
	imports: [
		CommonModule,
		ShellSidebarRoutingModule,
		SharedAllModule,
	],
	exports: [
		ShellSidebarComponent,
	],
})
export class ShellSidebarModule {
}
