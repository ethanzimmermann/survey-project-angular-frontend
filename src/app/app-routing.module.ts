import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminmanagementComponent } from './adminmanagement/adminmanagement.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'adminmanagement', component: AdminmanagementComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
