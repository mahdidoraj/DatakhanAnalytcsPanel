import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatLabel } from 'primeng/floatlabel';
import { SharedAllModule } from '../../shared-all/shared-all.module';

import { OTPRoutingModule } from './otp-routing.module';
import { OTPComponent } from './otp.component';


@NgModule({
  declarations: [
    OTPComponent
  ],
	imports: [
		CommonModule,
		OTPRoutingModule,
		SharedAllModule,
	],
})
export class OTPModule { }
