// src/app/shared/count-up.directive.ts — NEW
import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
	selector: '[countUp]',
	standalone: true
})
export class CountUpDirective implements OnInit, OnDestroy {
	@Input() countTo = 0;
	private io?: IntersectionObserver;
	private rafId?: number;

	constructor(private el: ElementRef<HTMLElement>) {}

	ngOnInit() {
		this.el.nativeElement.textContent = '0';
		this.io = new IntersectionObserver(([e])=>{
			if(e.isIntersecting){ this.animate(); this.io?.disconnect(); }
		},{threshold:.2});
		this.io.observe(this.el.nativeElement);
	}

	private animate(){
		const start = performance.now();
		const duration = 900;
		const from = 0, to = this.countTo;
		const step = (t:number)=>{
			const p = Math.min(1, (t - start)/duration);
			const val = Math.floor(from + (to-from) * (1 - Math.pow(1-p,3)));
			this.el.nativeElement.textContent = val.toLocaleString('fa-IR');
			if(p<1) this.rafId = requestAnimationFrame(step);
		};
		this.rafId = requestAnimationFrame(step);
	}

	ngOnDestroy(){ if(this.rafId) cancelAnimationFrame(this.rafId); this.io?.disconnect(); }
}
