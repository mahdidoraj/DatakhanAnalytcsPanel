import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./home-landing/home-landing.module').then(m => m.HomeLandingModule),
	},
	{
		path: 'dashboard',
		component: ShellComponent,
		loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule {
}
