import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginTemplateMainComponent } from './login-template-main/login-template-main.component';
import { LoginTemplateSecComponent } from './login-template-sec/login-template-sec.component';
import { LoginTemplatesBackgroundComponent } from './login-templates-background/login-templates-background.component';
import { LoginTemplatesComponent } from './login-templates/login-templates.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'login-template-main', component: LoginTemplateMainComponent },
    ],
  },
  {
    path: 'login-background',
    component: LoginTemplatesBackgroundComponent,
    children: [
      {
        path: '',
        component: LoginTemplatesComponent,
      },
      { path: 'two', component: LoginTemplateSecComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
