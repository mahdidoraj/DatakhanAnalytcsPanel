import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ShellHeaderModule } from './shell-header/shell-header.module';

import { ShellSidebarModule } from './shell-sidebar/shell-sidebar.module';
import { ShellComponent } from './shell.component';

@NgModule({
	declarations: [
		ShellComponent,
	],
	imports: [
		CommonModule,
		ShellSidebarModule,
		ShellHeaderModule,
		RouterOutlet,
	],
	exports: [ShellComponent],
})
export class ShellModule {
}
