import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellTestimonialsComponent } from './shell-testimonials.component';

describe('ShellTestimonialsComponent', () => {
  let component: ShellTestimonialsComponent;
  let fixture: ComponentFixture<ShellTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellTestimonialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
