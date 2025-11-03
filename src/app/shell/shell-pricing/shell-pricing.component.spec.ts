import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellPricingComponent } from './shell-pricing.component';

describe('ShellPricingComponent', () => {
  let component: ShellPricingComponent;
  let fixture: ComponentFixture<ShellPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
