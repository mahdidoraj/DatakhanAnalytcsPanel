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
	@HostBinding('class.sticky-top') sticky = true;
	scrolled=false;
	private dialog = inject(DialogService);

	items: MenuItem[] = [
		{ label:'ویژگی‌ها', command:()=>this.scrollTo('features') },
		{ label:'نمونه تحلیل', command:()=>this.scrollTo('insights') },
		{ label:'قیمت‌گذاری', command:()=>this.scrollTo('pricing') },
		{ label:'سوالات', command:()=>this.scrollTo('faq') }
	];

	@HostListener('window:scroll') onScroll(){ this.scrolled = (window.scrollY||0) > 12; }
	openDemo(){ this.dialog.open(ShellDemoDialogComponent,{header:'درخواست دمو', width:'600px', styleClass:'glass round-12'}); }
	scrollTo(id:string){ document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'start'}); }
}
