import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DrawerService } from '../drawer.service';

@Component({
	selector: 'app-shell-header',
	standalone: false,
	templateUrl: './shell-header.component.html',
	styleUrl: './shell-header.component.scss',
})
export class ShellHeaderComponent implements OnInit {
	private drawer = inject(DrawerService);
	isLoggedIn = false; // اینو بعداً از authService می‌گیری

	menuItems: MenuItem[] = [];

	ngOnInit(): void {
		this.buildMenu();
	}
	openFilters(){ this.drawer.open(); }

	buildMenu() {
		if (this.isLoggedIn) {
			// ✅ منو وقتی کاربر لاگین کرده
			this.menuItems = [
				{
					label: '📊 Dashboard',
					routerLink: '/',
				},
				{
					label: '👤 Account',
					items: [
						{label: 'Profile', icon: 'fas fa-user', routerLink: '/account/profile'},
						{label: 'Settings', icon: 'fas fa-cog', routerLink: '/account/settings'},
						{separator: true},
						{label: 'Logout', icon: 'fas fa-sign-out', command: () => this.logout()},
					],
				},
				{
					label: '⭐ Plans',
					items: [
						{label: 'Pro', icon: 'fas fa-star', routerLink: '/plans/pro'},
						{label: 'Enterprise', icon: 'fas fa-briefcase', routerLink: '/plans/enterprise'},
					],
				},
			];
		} else {
			// ✅ منو وقتی کاربر لاگین نکرده
			this.menuItems = [
				{
					label: '📊 Dashboard',
					routerLink: '/',
				},
				{
					label: '👤 Account',
					items: [
						{label: 'Login', icon: 'fas fa-sign-in', routerLink: '/auth/login'},
						{label: 'Register', icon: 'fas fa-user-plus', routerLink: '/auth/register'},
					],
				},
				{
					label: '⭐ Plans',
					items: [
						{label: 'Pro', icon: 'fas fa-star', routerLink: '/plans/pro'},
						{label: 'Enterprise', icon: 'fas fa-briefcase', routerLink: '/plans/enterprise'},
					],
				},
			];
		}
	}

	logout() {
		// TODO: بعداً به auth service وصلش کن
		this.isLoggedIn = false;
		this.buildMenu();
	}
}
