import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellEndCtaComponent } from './shell-end-cta.component';

describe('ShellEndCtaComponent', () => {
  let component: ShellEndCtaComponent;
  let fixture: ComponentFixture<ShellEndCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellEndCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellEndCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
