import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTemplatesBackgroundComponent } from './login-templates-background.component';

describe('LoginTemplatesBackgroundComponent', () => {
  let component: LoginTemplatesBackgroundComponent;
  let fixture: ComponentFixture<LoginTemplatesBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTemplatesBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTemplatesBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
