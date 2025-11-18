import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-shell-end-cta',
	standalone: false,
	templateUrl: './shell-end-cta.component.html',
	styleUrl: './shell-end-cta.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellEndCtaComponent {
	loading = false;

	industries = [
		{label: 'فروش و تجارت الکترونیک', value: 'ecommerce'},
		{label: 'خدمات مالی', value: 'finance'},
		{label: 'سلامت و درمان', value: 'health'},
		{label: 'سازمان‌ها و شرکت‌ها', value: 'enterprise'},
		{label: 'استارتاپ و فناوری', value: 'startup'},
	];

	heroForm!: FormGroup;

	constructor(private fb: FormBuilder) {
		this.heroForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			industry: [null, [Validators.required]],
			agree: [false, [Validators.requiredTrue]],
		});
	}

	get email() {
		return this.heroForm.get('email')!;
	}

	get industry() {
		return this.heroForm.get('industry')!;
	}

	get agree() {
		return this.heroForm.get('agree')!;
	}

	onSubmitHeroForm() {
		if (this.heroForm.invalid) {
			this.heroForm.markAllAsTouched();
			return;
		}

		this.loading = true;

		const payload = this.heroForm.value;

		// فراخوانی API / ارسال درخواست
		// this.heroService.requestDemo(payload).subscribe(...)

		setTimeout(() => {
			this.loading = false;
			this.heroForm.reset({
				email: '',
				industry: null,
				agree: false,
			});
		}, 800);
	}

}
