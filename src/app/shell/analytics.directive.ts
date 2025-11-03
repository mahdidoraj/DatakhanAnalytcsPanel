import { Directive, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[trackEvent]',
	standalone: false
})
export class TrackEventDirective {
	@Input('trackEvent') eventName = '';
	@Input() eventPayload: any;

	@HostListener('click')
	onClick() {
		// hook to real analytics later
		console.debug('[analytics]', this.eventName, this.eventPayload ?? {});
	}
}
