import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-shell-hero',
	standalone: false,
	templateUrl: './shell-hero.component.html',
	styleUrl: './shell-hero.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellHeroComponent {
	industries = [{label: 'مارکتینگ'}, {label: 'تحقیق و توسعه'}, {label: 'پشتیبانی'}, {label: 'رسانه'}];
	form = inject(FormBuilder).group({
		email: ['', [Validators.required, Validators.email]],
		industry: [''],
		agree: [false, Validators.requiredTrue],
	});

	constructor(private toast: MessageService) {
	}

	imgLoaded = signal(false);

	ngOnInit() {
		setTimeout(() => this.imgLoaded.set(true), 800);
	}

	invalid(c: string) {
		const ctl = this.form.get(c)!;
		return ctl.touched && ctl.invalid;
	}

	submit() {
		this.toast.add({severity: 'success', summary: 'موفق', detail: 'ثبت شد'});
		this.form.reset({agree: false});
	}

	openDemo() {
		const btn = document.querySelector('app-header button.p-button-outlined') as HTMLButtonElement;
		btn?.click();
	}

	scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
	}
}
