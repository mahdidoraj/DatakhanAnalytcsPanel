// src/app/shared/back-to-top.component.ts
import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-back-to-top',
	standalone: false,
	template: `
		<button pButton type="button" class="p-button-rounded back-to-top glass"
		        style="width:44px;height:44px"
		        [ngStyle]="{opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto':'none'}"
		        (click)="goTop()" aria-label="بازگشت به بالا">
			<i class="fa-solid fa-arrow-up"></i>
		</button>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackToTopComponent {
	visible = false;

	@HostListener('window:scroll')
	onScroll() {
		this.visible = (window.scrollY || 0) > 500;
	}

	goTop() {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}
}
