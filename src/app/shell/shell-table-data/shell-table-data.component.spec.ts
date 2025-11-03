import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellTableDataComponent } from './shell-table-data.component';

describe('ShellTableDataComponent', () => {
  let component: ShellTableDataComponent;
  let fixture: ComponentFixture<ShellTableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellTableDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
