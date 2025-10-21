import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class I18nService {
	private _lang = localStorage.getItem('ws_lang') || 'fa';
	get lang(){ return this._lang; }

	setLanguage(lang: 'fa'|'en'){
		this._lang = lang;
		localStorage.setItem('ws_lang', lang);
		const html = document.documentElement;
		html.lang = lang;
		html.dir = lang === 'fa' ? 'rtl' : 'ltr';
	}
}
