import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAllModule } from '../shared-all/shared-all.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
	declarations: [
		AuthComponent,
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		SharedAllModule,
	],
})
export class AuthModule {
}
