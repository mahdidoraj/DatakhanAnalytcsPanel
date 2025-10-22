import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { ShellModule } from './shell/shell.module';

/* WS UI Module */
import { WsUiModule } from './ws-ui/ws-ui.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedAllModule } from './shared-all/shared-all.module';
import { SharedHeaderModule } from './shared-header/shared-header.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		WsUiModule,
		AppRoutingModule,
		SharedAllModule,
		SharedHeaderModule,
		ShellModule,
	],
	providers: [
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: Aura,
				options: {
					darkModeSelector: '.my-app-dark',
				},
			},
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
