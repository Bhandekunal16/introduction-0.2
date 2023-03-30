import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTemplateMainComponent } from './login-template-main.component';

describe('LoginTemplateMainComponent', () => {
  let component: LoginTemplateMainComponent;
  let fixture: ComponentFixture<LoginTemplateMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTemplateMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTemplateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
