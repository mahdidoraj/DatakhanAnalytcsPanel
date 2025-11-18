import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-shell-top-button',
  standalone: false,
  templateUrl: './shell-top-button.component.html',
  styleUrl: './shell-top-button.component.scss'
})
export class ShellTopButtonComponent {
	visible = false;

	@HostListener('window:scroll', [])
	onWindowScroll(): void {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;

		const docHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
		this.visible = ratio >= 0.5;
	}

	goTop(): void {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	}

}
