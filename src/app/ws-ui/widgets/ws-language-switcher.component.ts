import { Component } from '@angular/core';
import { I18nService } from '../services/i18n.service';

@Component({
	selector: 'ws-language-switcher',
	standalone:false,
	template: `
  <div class="ws-card p-3 d-inline-flex align-items-center ws-gap">
    <i class="fa-solid fa-globe"></i>
    <button pButton type="button" class="p-button-outlined" (click)="set('fa')">فارسی</button>
    <button pButton type="button" class="p-button-outlined" (click)="set('en')">English</button>
  </div>`,
})
export class WsLanguageSwitcherComponent {
	constructor(private i18n:I18nService){ this.i18n.setLanguage(this.i18n.lang as any); }
	set(lang:'fa'|'en'){ this.i18n.setLanguage(lang); }
}
