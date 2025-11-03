import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellGeoPulseComponent } from './shell-geo-pulse.component';

describe('ShellGeoPulseComponent', () => {
  let component: ShellGeoPulseComponent;
  let fixture: ComponentFixture<ShellGeoPulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellGeoPulseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellGeoPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
