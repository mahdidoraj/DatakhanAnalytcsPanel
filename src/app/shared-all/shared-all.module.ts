import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';

import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { Drawer } from 'primeng/drawer';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabel } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { InputOtp } from 'primeng/inputotp';
import { InputTextarea } from 'primeng/inputtextarea';
import { Menubar } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelMenu } from 'primeng/panelmenu';
import { PasswordDirective } from 'primeng/password';
import { ProgressBar } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { ScrollTopModule } from 'primeng/scrolltop';
import { Skeleton } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { TabPanel, TabView } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
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
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		DropdownModule,
		MultiSelectModule,
		CalendarModule,
		InputTextModule,
		ButtonModule,
		TableModule,
		TooltipModule,
		DialogModule,
		SidebarModule,
		CardModule,
		TagModule,
		ToggleButtonModule,
		ChipModule,
		InputSwitchModule,
		DividerModule,
		BadgeModule,
		ProgressSpinnerModule,
		NgApexchartsModule,
		Toolbar,
		ProgressBar,
		TabPanel,
		Avatar,
		TabView,
		Skeleton,
		InputOtp,
		FloatLabel,
		PasswordDirective,
		PanelMenu,
		Menubar,
		Drawer,
		InputTextarea,
		CheckboxModule,
		ToastModule,
		CarouselModule,
		RatingModule,
		AccordionModule,
		ChipsModule,
		ScrollTopModule,
		InputMaskModule,
	],
	exports: [
		ReactiveFormsModule,
		FormsModule,
		DropdownModule,
		MultiSelectModule,
		CalendarModule,
		InputTextModule,
		ButtonModule,
		TableModule,
		TooltipModule,
		DialogModule,
		SidebarModule,
		CardModule,
		TagModule,
		ToggleButtonModule,
		ChipModule,
		InputSwitchModule,
		DividerModule,
		BadgeModule,
		ProgressSpinnerModule,
		NgApexchartsModule,
		Toolbar,
		ProgressBar,
		TabPanel,
		Avatar,
		TabView,
		Skeleton,
		InputOtp,
		FloatLabel,
		PasswordDirective,
		PanelMenu,
		Menubar,
		Drawer,
		InputTextarea,
		CheckboxModule,
		ToastModule,
		CarouselModule,
		RatingModule,
		AccordionModule,
		ChipsModule,
		ScrollTopModule,
		InputMaskModule,
	],
	providers: [MessageService], // ⬅️ تأمین‌کننده سرویس

})
export class SharedAllModule {
}
