import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Avatar } from 'primeng/avatar';

import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabel } from 'primeng/floatlabel';
import { InputOtp } from 'primeng/inputotp';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordDirective } from 'primeng/password';
import { ProgressBar } from 'primeng/progressbar';
import { Skeleton } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { TabPanel, TabView } from 'primeng/tabview';
import { Toolbar } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
	declarations: [],
	imports: [
		CommonModule, ReactiveFormsModule, FormsModule,
		DropdownModule, MultiSelectModule, CalendarModule, InputTextModule, ButtonModule,
		TableModule, TooltipModule, DialogModule, SidebarModule, CardModule, TagModule,
		ToggleButtonModule, ChipModule, InputSwitchModule, DividerModule, BadgeModule,
		ProgressSpinnerModule, NgApexchartsModule,
		Toolbar, ProgressBar, TabPanel, Avatar, TabView, Skeleton,
		InputOtp,
		FloatLabel, PasswordDirective,
	],
	exports: [
		ReactiveFormsModule, FormsModule,
		DropdownModule, MultiSelectModule, CalendarModule, InputTextModule, ButtonModule,
		TableModule, TooltipModule, DialogModule, SidebarModule, CardModule, TagModule,
		ToggleButtonModule, ChipModule, InputSwitchModule, DividerModule, BadgeModule,
		ProgressSpinnerModule, NgApexchartsModule,
		Toolbar, ProgressBar, TabPanel, Avatar, TabView, Skeleton,
		FloatLabel,
		InputOtp, PasswordDirective,
	],
})
export class SharedAllModule {
}
