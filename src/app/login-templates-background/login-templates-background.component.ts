import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-templates-background',
  templateUrl: './login-templates-background.component.html',
  styleUrls: ['./login-templates-background.component.scss'],
})
export class LoginTemplatesBackgroundComponent {
  router: ActivatedRoute | null | undefined;
  constructor(private route: Router) {}
  pageOne() {
    this.route.navigate(['/login-background/two'], {
      relativeTo: this.router,
    });
  }
}
