import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Survey } from './survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private httpClient: HttpClient) { }

  //Get survey by id
  public getSurvey(id: number): Observable<Survey> {
    return this.httpClient.get<Survey>('/api/Survey/'+id);
  }

  //Save survey
  public postSurvey(survey: Survey){
    return this.httpClient.post<Survey>('/api/Survey', survey);
  }
}
