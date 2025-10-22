import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAllModule } from '../shared-all/shared-all.module';

import { SharedHeaderRoutingModule } from './shared-header-routing.module';
import { SharedHeaderComponent } from './shared-header.component';

@NgModule({
	declarations: [
		SharedHeaderComponent,
	],
	exports: [
		SharedHeaderComponent,
	],
	imports: [
		CommonModule,
		SharedHeaderRoutingModule,
		SharedAllModule,
	],
})
export class SharedHeaderModule {
}
