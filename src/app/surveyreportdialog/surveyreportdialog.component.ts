import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import { Surveytemplate } from "../surveylist/surveytemplate"
import { UserlistService } from "../userlist/userlist.service";
import { SurveytemplateService } from "../surveylist/surveytemplate.service";

//NOTE: this is messier than I'd like it to be

@Component({
  selector: 'app-surveyreportdialog',
  templateUrl: './surveyreportdialog.component.html',
  styleUrls: ['./surveyreportdialog.component.css']
})
export class SurveyreportdialogComponent implements OnInit {
  //List of survey and answer pairs
  surveyUserPairs: any[];
  //List of answer totals for questions
  answerCounts: any[];
  //current template
  template: Surveytemplate;
  //Boolean checks for displaying specific survey answers
  showSurveyDetails: boolean[];

  constructor(private dialogRef: MatDialogRef<SurveyreportdialogComponent>, 
    @Inject(MAT_DIALOG_DATA) data,
    private surveytemplateService: SurveytemplateService,
    private userlistService: UserlistService) {
      //Initialize lists
      this.surveyUserPairs = [];
      this.answerCounts = [];
      this.showSurveyDetails = [];
      //Gets template passed to the dialog component
      this.template = data.template;
      //Get all surveys linked to the current template
      this.surveytemplateService.getSurveysByTemplate(this.template.id).subscribe(
        surveys=> {
          for(var i=0; i<surveys.length; i++){
            let surveyHolder = surveys[i];
            //Get the users who filled out each survey
            this.userlistService.getUser(surveys[i].user).subscribe(
              user => {
                //Store survey and user pairs
                this.surveyUserPairs.push({survey: surveyHolder, user: user})
              }
            );
            //Initialize showDetails to false for all surveys
            this.showSurveyDetails[i] = false;
          }
          //Get yes/no counts for each survey question
          for(var k = 0; k<this.template.questions.length; k++){
            let yesCount = 0;
            let noCount = 0;
            //Loop through surveys for a template, get their selected answer, and iterate the yes/no counters appropriately
            surveys.forEach(survey => {
              if(survey.answers[k] != null && survey.answers[k].endsWith(" || No")){
                noCount++;
              }
              else if (survey.answers[k] != null && survey.answers[k].endsWith(" || Yes")){
                yesCount++;
              }
            });
            //Store yes/no counters on appropriate index
            this.answerCounts[k]={yes: yesCount, no: noCount};
          }
        }
      );
     }

  ngOnInit(): void {

  }

  //displays the details of a specific survey
  toggleDetails(index: number){
    this.showSurveyDetails[index] = !this.showSurveyDetails[index];
  }

  //Closes the dialog popup
  close(){
    this.dialogRef.close();
  }

}
