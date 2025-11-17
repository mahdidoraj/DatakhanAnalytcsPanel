import { ChangeDetectionStrategy, Component, HostBinding, HostListener, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ShellDemoDialogComponent } from '../shell-demo-dialog/shell-demo-dialog.component';

@Component({
	selector: 'app-shell-header',
	standalone: false,
	templateUrl: './shell-header.component.html',
	styleUrl: './shell-header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellHeaderComponent {
	menuOpen = false;

	toggleMenu(): void {
		this.menuOpen = !this.menuOpen;
	}
}
