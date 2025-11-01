import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Dataset, Feature, Logo, Testimonial } from '../home-landing.component';
import { DATASETS, FEATURES, LOGOS, TESTIMONIALS } from '../home-landing.mock';

@Injectable({
  providedIn: 'root'
})
export class HomeLandingApiService {

	getFeatures(): Observable<Feature[]> {
		return of(FEATURES).pipe(delay(150));
	}
	getDatasets(): Observable<Dataset[]> {
		return of(DATASETS).pipe(delay(200));
	}
	getTestimonials(): Observable<Testimonial[]> {
		return of(TESTIMONIALS).pipe(delay(200));
	}
	getLogos(): Observable<Logo[]> {
		return of(LOGOS).pipe(delay(100));
	}
}
