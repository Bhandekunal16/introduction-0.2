import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTemplatesComponent } from './login-templates.component';

describe('LoginTemplatesComponent', () => {
  let component: LoginTemplatesComponent;
  let fixture: ComponentFixture<LoginTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
