import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAllModule } from '../shared-all/shared-all.module';
import { ShellHeaderModule } from '../shell/shell-header/shell-header.module';
import { ShellModule } from '../shell/shell.module';

import { HomeLandingRoutingModule } from './home-landing-routing.module';
import { HomeLandingComponent } from './home-landing.component';

@NgModule({
	declarations: [
		HomeLandingComponent,
	],
	imports: [
		CommonModule,
		HomeLandingRoutingModule,
		SharedAllModule,
		ShellHeaderModule,
		ShellModule,
	],
})
export class HomeLandingModule {
}
