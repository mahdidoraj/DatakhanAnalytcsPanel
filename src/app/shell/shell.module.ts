import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { SharedAllModule } from '../shared-all/shared-all.module';
import { TrackEventDirective } from './analytics.directive';
import { BackToTopComponent } from './back-to-top.component';
import { CountUpDirective } from './count-up.directive';
import { RevealOnScrollDirective } from './reveal-on-scroll.directive';
import { ShellHeaderModule } from './shell-header/shell-header.module';

import { ShellSidebarModule } from './shell-sidebar/shell-sidebar.module';
import { ShellComponent } from './shell.component';
import { ShellHeroComponent } from './shell-hero/shell-hero.component';
import { ShellSocialProfComponent } from './shell-social-prof/shell-social-prof.component';
import { ShellFeatureGridComponent } from './shell-feature-grid/shell-feature-grid.component';
import { LiveInsightsComponent } from './live-insights/live-insights.component';
import { ShellGeoPulseComponent } from './shell-geo-pulse/shell-geo-pulse.component';
import { ShellTableDataComponent } from './shell-table-data/shell-table-data.component';
import { ShellUseCaseComponent } from './shell-use-case/shell-use-case.component';
import { ShellHowItWorkComponent } from './shell-how-it-work/shell-how-it-work.component';
import { ShellTestimonialsComponent } from './shell-testimonials/shell-testimonials.component';
import { ShellPricingComponent } from './shell-pricing/shell-pricing.component';
import { ShellFaqComponent } from './shell-faq/shell-faq.component';
import { ShellEndCtaComponent } from './shell-end-cta/shell-end-cta.component';
import { ShellFooterComponent } from './shell-footer/shell-footer.component';
import { ShellDemoDialogComponent } from './shell-demo-dialog/shell-demo-dialog.component';
import { ShellParticlesComponent } from './shell-particles/shell-particles.component';

@NgModule({
	declarations: [
		ShellComponent,
		ShellHeroComponent,
		ShellSocialProfComponent,
		TrackEventDirective,
		BackToTopComponent,
		RevealOnScrollDirective,
		ShellFeatureGridComponent,
		LiveInsightsComponent,
		ShellGeoPulseComponent,
		ShellTableDataComponent,
		ShellUseCaseComponent,
		ShellHowItWorkComponent,
		ShellTestimonialsComponent,
		ShellPricingComponent,
		ShellFaqComponent,
		ShellEndCtaComponent,
		ShellFooterComponent,
		ShellDemoDialogComponent,
  ShellParticlesComponent,
	],
	imports: [
		CommonModule,
		ShellSidebarModule,
		ShellHeaderModule,
		RouterOutlet,
		SharedAllModule,
		CountUpDirective,
	],
	exports: [
		ShellComponent,
		TrackEventDirective,
		BackToTopComponent,
		RevealOnScrollDirective,
		ShellHeroComponent,
		ShellFeatureGridComponent,
		ShellSocialProfComponent,
		LiveInsightsComponent,
		ShellGeoPulseComponent,
		ShellTableDataComponent,
		ShellUseCaseComponent,
		ShellHowItWorkComponent,
		ShellTestimonialsComponent,
		ShellPricingComponent,
		ShellFaqComponent,
		ShellEndCtaComponent,
		ShellFooterComponent,
		ShellParticlesComponent,
	],
	providers: [
		DialogService,
	],
})
export class ShellModule {
}
