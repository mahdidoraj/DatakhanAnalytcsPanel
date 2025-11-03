import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
	selector: '[revealOnScroll]',
	standalone: false
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
	private io?: IntersectionObserver;

	constructor(private el: ElementRef<HTMLElement>) {}

	ngOnInit() {
		const node = this.el.nativeElement;
		node.classList.add('reveal');
		this.io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('in');
				this.io?.disconnect();
			}
		}, { threshold: 0.15 });
		this.io.observe(node);
	}

	ngOnDestroy() { this.io?.disconnect(); }
}
