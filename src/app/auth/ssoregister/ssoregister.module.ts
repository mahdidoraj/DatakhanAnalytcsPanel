import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAllModule } from '../../shared-all/shared-all.module';

import { SSORegisterRoutingModule } from './ssoregister-routing.module';
import { SSORegisterComponent } from './ssoregister.component';

@NgModule({
	declarations: [
		SSORegisterComponent,
	],
	imports: [
		CommonModule,
		SSORegisterRoutingModule,
		SharedAllModule,
	],
})
export class SSORegisterModule {
}
