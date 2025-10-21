import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClassicComponent } from './dashboard-classic.component';

describe('DashboardClassicComponent', () => {
  let component: DashboardClassicComponent;
  let fixture: ComponentFixture<DashboardClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardClassicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
