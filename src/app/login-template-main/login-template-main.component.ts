import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-template-main',
  templateUrl: './login-template-main.component.html',
  styleUrls: ['./login-template-main.component.scss'],
})
export class LoginTemplateMainComponent {
  constructor(private route: Router) {}
  tabs = [1];
  design1() {
    this.route.navigate(['login-background']);
  }
}
