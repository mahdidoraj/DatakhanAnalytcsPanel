import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAllModule } from '../../shared-all/shared-all.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
	declarations: [
		RegisterComponent,
	],
	imports: [
		CommonModule,
		RegisterRoutingModule,
		SharedAllModule,
	],
})
export class RegisterModule {
}
