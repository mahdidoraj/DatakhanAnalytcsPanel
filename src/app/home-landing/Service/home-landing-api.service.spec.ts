import { TestBed } from '@angular/core/testing';

import { HomeLandingApiService } from './home-landing-api.service';

describe('HomeLandingApiService', () => {
  let service: HomeLandingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeLandingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
