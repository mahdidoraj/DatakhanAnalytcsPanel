import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellHeroComponent } from './shell-hero.component';

describe('ShellHeroComponent', () => {
  let component: ShellHeroComponent;
  let fixture: ComponentFixture<ShellHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
