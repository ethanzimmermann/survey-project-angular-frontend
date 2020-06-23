import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminmanagementComponent } from './adminmanagement/adminmanagement.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';
import { HeaderComponent } from './header/header.component';
import { SurveylistComponent } from './surveylist/surveylist.component';
import { SurveyeditComponent } from './surveyedit/surveyedit.component';
import { UserlistComponent } from './userlist/userlist.component';
import { SendsurveydialogComponent } from './sendsurveydialog/sendsurveydialog.component';
import { SurveyreportdialogComponent } from './surveyreportdialog/surveyreportdialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminmanagementComponent,
    HomeComponent,
    SurveyComponent,
    HeaderComponent,
    SurveylistComponent,
    SurveyeditComponent,
    UserlistComponent,
    SendsurveydialogComponent,
    SurveyreportdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    LoginComponent,
    AdminmanagementComponent,
    HomeComponent,
    SurveyComponent,
    HeaderComponent,
    SurveylistComponent,
    SurveyeditComponent,
    UserlistComponent,
    SendsurveydialogComponent],
  entryComponents: [SendsurveydialogComponent,SurveyreportdialogComponent]
})
export class AppModule { }
