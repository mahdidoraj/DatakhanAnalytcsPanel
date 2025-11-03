import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellFeatureGridComponent } from './shell-feature-grid.component';

describe('ShellFeatureGridComponent', () => {
  let component: ShellFeatureGridComponent;
  let fixture: ComponentFixture<ShellFeatureGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellFeatureGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellFeatureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
