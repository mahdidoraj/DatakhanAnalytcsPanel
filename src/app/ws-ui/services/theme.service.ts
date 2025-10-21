import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ThemeService {
	isDark(): boolean { return document.body.classList.contains('dark'); }
	toggle(){ document.body.classList.toggle('dark'); }
}
