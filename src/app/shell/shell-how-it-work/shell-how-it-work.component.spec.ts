import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellHowItWorkComponent } from './shell-how-it-work.component';

describe('ShellHowItWorkComponent', () => {
  let component: ShellHowItWorkComponent;
  let fixture: ComponentFixture<ShellHowItWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellHowItWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellHowItWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
