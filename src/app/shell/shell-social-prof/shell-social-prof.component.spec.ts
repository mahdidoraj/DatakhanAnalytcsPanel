import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellSocialProfComponent } from './shell-social-prof.component';

describe('ShellSocialProfComponent', () => {
  let component: ShellSocialProfComponent;
  let fixture: ComponentFixture<ShellSocialProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellSocialProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellSocialProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
