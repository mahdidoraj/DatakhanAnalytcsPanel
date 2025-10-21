import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
	],
})
export class SharedHeaderModule { }
