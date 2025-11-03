import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-shell-footer',
	standalone: false,
	templateUrl: './shell-footer.component.html',
	styleUrl: './shell-footer.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellFooterComponent {
	year = new Date().getFullYear();
}
