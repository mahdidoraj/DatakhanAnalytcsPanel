import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skeleton } from 'primeng/skeleton';
import { SharedAllModule } from '../shared-all/shared-all.module';

/* Components */
import { WsFilterBarComponent } from './widgets/ws-filter-bar.component';
import { WsKpiCardComponent } from './widgets/ws-kpi-card.component';
import { WsChartSentimentOverTimeComponent } from './widgets/ws-chart-sentiment-over-time.component';
import { WsChartEngagementByNetworkComponent } from './widgets/ws-chart-engagement-by-network.component';
import { WsChartKeywordsTreemapComponent } from './widgets/ws-chart-keywords-treemap.component';
import { WsChartNetworkShareDonutComponent } from './widgets/ws-chart-network-share-donut.component';
import { WsTopPostsTableComponent } from './widgets/ws-top-posts-table.component';
import { WsPostDetailPaneComponent } from './widgets/ws-post-detail-pane.component';
import { WsReviewQueueComponent } from './widgets/ws-review-queue.component';
import { WsMapGeoComponent } from './widgets/ws-map-geo.component';
import { WsLanguageSwitcherComponent } from './widgets/ws-language-switcher.component';
import { WsThemeToggleComponent } from './widgets/ws-theme-toggle.component';
import { WsEmptyStateComponent } from './widgets/ws-empty-state.component';
import { WsSkeletonComponent } from './widgets/ws-skeleton.component';

@NgModule({
	declarations: [
		WsFilterBarComponent, WsKpiCardComponent,
		WsChartSentimentOverTimeComponent, WsChartEngagementByNetworkComponent,
		WsChartKeywordsTreemapComponent, WsChartNetworkShareDonutComponent,
		WsTopPostsTableComponent, WsPostDetailPaneComponent,
		WsReviewQueueComponent, WsMapGeoComponent,
		WsLanguageSwitcherComponent, WsThemeToggleComponent,
		WsEmptyStateComponent, WsSkeletonComponent,
	],
	imports: [
		CommonModule,
		SharedAllModule,
	],
	exports: [
		WsFilterBarComponent, WsKpiCardComponent,
		WsChartSentimentOverTimeComponent, WsChartEngagementByNetworkComponent,
		WsChartKeywordsTreemapComponent, WsChartNetworkShareDonutComponent,
		WsTopPostsTableComponent, WsPostDetailPaneComponent,
		WsReviewQueueComponent, WsMapGeoComponent,
		WsLanguageSwitcherComponent, WsThemeToggleComponent,
		WsEmptyStateComponent, WsSkeletonComponent,
	],
})
export class WsUiModule {
}
