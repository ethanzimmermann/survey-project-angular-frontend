import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Surveytemplate } from './surveytemplate';
import { User } from '../userlist/user';
import { Survey } from '../survey/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveytemplateService {

  constructor(private http: HttpClient) { }

  //Get survey templates created by the currently logged in admin
  public getSurveyTemplates(): Observable<Surveytemplate[]> {
    return this.http.get<Surveytemplate[]>('/api/SurveyTemplate/'+localStorage.getItem("currentUser"))
  }

  //Get survey template by id
  public getSurveyTemplate(id: number): Observable<Surveytemplate> {
    return this.http.get<Surveytemplate>('/api/SurveyTemplate/GetTemplate/'+id)
  }

  //Post back a survey template
  public postSurveyTemplate(surveyTemplate: Surveytemplate){
    return this.http.post<Surveytemplate>('/api/SurveyTemplate', surveyTemplate);
  }

  //Create and send surveys to selected users
  public sendSurvey(template: Surveytemplate, surveys: any[]){
    return this.http.post('/api/Survey/SendSurvey', { "template": template, surveys: surveys})
  }

  //Get surveys from the same template
  public getSurveysByTemplate(templateId: number): Observable<Survey[]>{
    return this.http.get<Survey[]>('/api/Survey/GetSurveysByTemplate/'+templateId);
  }
}
