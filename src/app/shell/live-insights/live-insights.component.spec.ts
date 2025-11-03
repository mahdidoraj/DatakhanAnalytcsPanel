import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveInsightsComponent } from './live-insights.component';

describe('LiveInsightsComponent', () => {
  let component: LiveInsightsComponent;
  let fixture: ComponentFixture<LiveInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiveInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
