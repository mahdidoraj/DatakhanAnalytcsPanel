import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-shared-header',
  standalone: false,
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.scss'
})
export class SharedHeaderComponent implements OnInit {
	isLoggedIn = false; // اینو بعداً از authService می‌گیری

	menuItems: MenuItem[] = [];

	ngOnInit(): void {
		this.buildMenu();
	}

	buildMenu() {
		if (this.isLoggedIn) {
			// ✅ منو وقتی کاربر لاگین کرده
			this.menuItems = [
				{
					label: '📊 Dashboard',
					routerLink: '/'
				},
				{
					label: '👤 Account',
					items: [
						{ label: 'Profile', icon: 'pi pi-user', routerLink: '/account/profile' },
						{ label: 'Settings', icon: 'pi pi-cog', routerLink: '/account/settings' },
						{ separator: true },
						{ label: 'Logout', icon: 'pi pi-sign-out', command: () => this.logout() }
					]
				},
				{
					label: '⭐ Plans',
					items: [
						{ label: 'Pro', icon: 'pi pi-star', routerLink: '/plans/pro' },
						{ label: 'Enterprise', icon: 'pi pi-briefcase', routerLink: '/plans/enterprise' }
					]
				}
			];
		} else {
			// ✅ منو وقتی کاربر لاگین نکرده
			this.menuItems = [
				{
					label: '📊 Dashboard',
					routerLink: '/'
				},
				{
					label: '👤 Account',
					items: [
						{ label: 'Login', icon: 'pi pi-sign-in', routerLink: '/auth/login' },
						{ label: 'Register', icon: 'pi pi-user-plus', routerLink: '/auth/register' }
					]
				},
				{
					label: '⭐ Plans',
					items: [
						{ label: 'Pro', icon: 'pi pi-star', routerLink: '/plans/pro' },
						{ label: 'Enterprise', icon: 'pi pi-briefcase', routerLink: '/plans/enterprise' }
					]
				}
			];
		}
	}

	logout() {
		// TODO: بعداً به auth service وصلش کن
		this.isLoggedIn = false;
		this.buildMenu();
	}
}
