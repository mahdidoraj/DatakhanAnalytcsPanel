import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellParticlesComponent } from './shell-particles.component';

describe('ShellParticlesComponent', () => {
  let component: ShellParticlesComponent;
  let fixture: ComponentFixture<ShellParticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellParticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
