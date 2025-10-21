import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAllModule } from '../../shared-all/shared-all.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
	declarations: [
		LoginComponent,
	],
	imports: [
		CommonModule,
		LoginRoutingModule,
		SharedAllModule,
	],
})
export class LoginModule {
}
