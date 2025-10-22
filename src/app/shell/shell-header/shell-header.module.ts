import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAllModule } from '../../shared-all/shared-all.module';

import { ShellHeaderRoutingModule } from './shell-header-routing.module';
import { ShellHeaderComponent } from './shell-header.component';

@NgModule({
	declarations: [
		ShellHeaderComponent,
	],
	imports: [
		CommonModule,
		ShellHeaderRoutingModule,
		SharedAllModule,
	],
	exports: [
		ShellHeaderComponent,
	],
})
export class ShellHeaderModule {
}
