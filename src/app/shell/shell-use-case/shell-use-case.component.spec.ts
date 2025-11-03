import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellUseCaseComponent } from './shell-use-case.component';

describe('ShellUseCaseComponent', () => {
  let component: ShellUseCaseComponent;
  let fixture: ComponentFixture<ShellUseCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellUseCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellUseCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
