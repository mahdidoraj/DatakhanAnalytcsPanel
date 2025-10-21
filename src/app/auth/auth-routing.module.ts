import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: 'login',
				loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
			},
			{
				path: 'register',
				loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
			},
			{
				path: 'sso-register',
				loadChildren: () => import('./ssoregister/ssoregister.module').then(m => m.SSORegisterModule),
			},

			{
				path: 'otp-login',
				loadChildren: () => import('./otp/otp.module').then(m => m.OTPModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {
}
