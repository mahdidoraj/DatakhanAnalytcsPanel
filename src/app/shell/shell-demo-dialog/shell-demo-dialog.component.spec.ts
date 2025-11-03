import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellDemoDialogComponent } from './shell-demo-dialog.component';

describe('ShellDemoDialogComponent', () => {
  let component: ShellDemoDialogComponent;
  let fixture: ComponentFixture<ShellDemoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellDemoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellDemoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
