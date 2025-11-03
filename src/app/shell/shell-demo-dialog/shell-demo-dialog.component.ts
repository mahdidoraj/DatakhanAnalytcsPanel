import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-shell-demo-dialog',
	standalone: false,
	templateUrl: './shell-demo-dialog.component.html',
	styleUrl: './shell-demo-dialog.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellDemoDialogComponent {
	sizes = [{label: '۱-۱۰'}, {label: '۱۱-۵۰'}, {label: '۵۱-۲۰۰'}, {label: '۲۰۰+'}];
	form = inject(FormBuilder).group({
		name: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
		company: [''],
		size: [''],
		profile: [''],
		note: ['', Validators.maxLength(500)],
	});

	constructor(private toast: MessageService) {
	}

	submit() {
		this.toast.add({severity: 'success', summary: 'درخواست ثبت شد', detail: 'به زودی با شما تماس می‌گیریم'});
	}

}
