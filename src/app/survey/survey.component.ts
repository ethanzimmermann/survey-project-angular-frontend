import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from './survey.service';
import { SurveytemplateService } from '../surveylist/surveytemplate.service';
import { Survey } from './survey';
import { Surveytemplate } from '../surveylist/surveytemplate';

//NOTE: this is a little messier than I'd like it to be

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  //current survey object
  survey: Survey;
  //template object linked to survey
  template: Surveytemplate;
  //completeness check
  complete: boolean;

  constructor(private route: ActivatedRoute,
    private surveyService: SurveyService,
    private surveytemplateService: SurveytemplateService) { }

  ngOnInit(): void {
    //Use activated routes to get the survey id query parameter
    this.route.queryParams.subscribe(params => {
      //Get the survey from the backend
      this.surveyService.getSurvey(params.surveyId).subscribe(survey => {
        this.survey = survey;
        //If survey is complete, just show the thank you message
        if(this.survey.status == "completed"){
          this.complete = true;
        }
        else{
          this.complete = false;
          //If the survey is incomplete, load the survey's template for the question texts
          this.surveytemplateService.getSurveyTemplate(survey.template).subscribe(
            template =>{ 
              this.template = template;
              //If this is the first time we're loading the survey
              if(this.survey.status == "notviewed"){
                for(var i = 0; i<this.template.questions.length; i++){
                  //Store No values for all current questions
                  this.survey.answers[i] = this.template.questions[i] + " || No"
                }
                //Set status to viewed and save the survey
                this.survey.status = "viewed";
                this.surveyService.postSurvey(this.survey).subscribe(survey => {});
              }
            }
          )
        }
      });
    })
  }

  updateAnswer(e, index: number){
    this.survey.answers[index] = this.template.questions[index] + " || " + 
     (e.target.checked? "Yes" : "No");
     if(this.survey.status != "in-progress"){
       this.survey.status = "in-progress";
     }
     this.surveyService.postSurvey(this.survey).subscribe(survey => {});
  }

  completeSurvey(){
    this.survey.status = "completed";
    this.surveyService.postSurvey(this.survey).subscribe(survey =>
      { this.complete = true; })
  }

}
