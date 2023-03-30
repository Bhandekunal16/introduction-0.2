import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTemplateSecComponent } from './login-template-sec.component';

describe('LoginTemplateSecComponent', () => {
  let component: LoginTemplateSecComponent;
  let fixture: ComponentFixture<LoginTemplateSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTemplateSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTemplateSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
