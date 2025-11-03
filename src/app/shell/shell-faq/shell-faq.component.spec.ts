import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellFaqComponent } from './shell-faq.component';

describe('ShellFaqComponent', () => {
  let component: ShellFaqComponent;
  let fixture: ComponentFixture<ShellFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
