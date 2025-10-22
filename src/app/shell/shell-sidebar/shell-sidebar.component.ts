import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-shell-sidebar',
  standalone: false,
  templateUrl: './shell-sidebar.component.html',
  styleUrl: './shell-sidebar.component.scss'
})
export class ShellSidebarComponent {
	private drawer = inject(DrawerService);
	private fb = inject(FormBuilder);

	visible = computed(()=> this.drawer.visible());

	langs = ['fa','en'];
	networks = ['X','Instagram','Facebook'];
	sentiments = ['positive','neutral','negative'];
	media = ['text','image','video','link'];

	filters = this.fb.nonNullable.group({
		lang: this.fb.control<'fa'|'en'>('fa'),
		networks: this.fb.control<string[]>(['X','Instagram','Facebook']),
		sentiments: this.fb.control<string[]>(['positive','neutral','negative']),
		media: this.fb.control<string[]>(['text','image','video','link']),
		range: this.fb.control<Date[] | null>(null),
	});

	onVisibleChange(v:boolean){ v ? this.drawer.open() : this.drawer.close(); }
	apply(){ this.drawer.close(); /* emit filters via service/event-bus if needed */ }
	reset(){ this.filters.reset({ lang:'fa',networks:['X','Instagram','Facebook'],sentiments:['positive','neutral','negative'],media:['text','image','video','link'],range:null }); }

}
