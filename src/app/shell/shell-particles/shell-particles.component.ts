import { AfterViewInit, Component } from '@angular/core';

@Component({
	selector: 'app-shell-particles',
	standalone: false,
	templateUrl: './shell-particles.component.html',
	styleUrl: './shell-particles.component.scss',
})
export class ShellParticlesComponent implements AfterViewInit {
	particlesOptions = {
		preset: 'links',
		background: {
			color: '#000',
		},
		particles: {
			color: {value: '#FFF'},
			links: {
				color: '#FFF',
				distance: 150,
				opacity: 0.4,
			},
		},
	};

	ngAfterViewInit() {
		particlesJS.load(
			'particles-js',
			'/assets/particles-config.json',
			null,
		);
	}
}
