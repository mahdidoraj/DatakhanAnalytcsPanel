import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellTopButtonComponent } from './shell-top-button.component';

describe('ShellTopButtonComponent', () => {
  let component: ShellTopButtonComponent;
  let fixture: ComponentFixture<ShellTopButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellTopButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellTopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
