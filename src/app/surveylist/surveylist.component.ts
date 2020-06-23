import { Component, OnInit } from '@angular/core';
import { SurveytemplateService } from './surveytemplate.service';
import { UserlistService } from '../userlist/userlist.service';
import { Surveytemplate } from './surveytemplate';
import { User } from "../userlist/user";

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SendsurveydialogComponent } from '../sendsurveydialog/sendsurveydialog.component';
import { SurveyreportdialogComponent } from '../surveyreportdialog/surveyreportdialog.component';

@Component({
  selector: 'app-surveylist',
  templateUrl: './surveylist.component.html',
  styleUrls: ['./surveylist.component.css']
})
export class SurveylistComponent implements OnInit {
  //List of all survey templates for current admin
  templates: Surveytemplate[];
  //Holder for a template being edited
  editingTemplate: Surveytemplate;
  //Boolean check for displaying the edit subcomponent
  editing: boolean;
  //List of users for sending surverys
  users: User[];
  //List of users selected for a survey
  selectedUsers: User[];

  constructor(private surveytemplateService: SurveytemplateService, private userlistService: UserlistService, private dialog: MatDialog) { }

  ngOnInit(): void {
    //Get list of survey templates created by this admin
    this.surveytemplateService.getSurveyTemplates().subscribe(templates => this.templates = templates);
    //Get list of users this admin can send surveys to
    this.userlistService.getUsers().subscribe(users => this.users = users);
    //Set editTemplate originally to a new, survey template object
    this.editingTemplate = { id: -1, name: "", questions: [], admin: localStorage.getItem("currentUser")};
    //Not editing on initial open
    this.editing = false;
    //initialize selectedUsers
    this.selectedUsers=[];
  }

  //Opens the dialog popup for sending a survey to users
  openDialogSend(template: Surveytemplate) {
    const dialogConfig = new MatDialogConfig();

    //Set dialog popup settings
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height= '400px';
    dialogConfig.width= '600px';

    //Pass the dialog popup the selected template and list of available users
    dialogConfig.data = {
      template: template,
      users: this.users
    }
    
    //Open the dialog popup
    const dialogRef = this.dialog.open(SendsurveydialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data=>{
        //For all the selected users, create an empty, notviewed survey to post back to the db and send to users
        let surveys = [];
        for(var i=0; i<data.length; i++){
          surveys.push({id: -1, answers: [], user: data[i].id, template: template.id, status: "notviewed"})
        }
        //Send new surveys to backend
        this.surveytemplateService.sendSurvey(template,surveys).subscribe(response => {
          //Reload page on completion
          window.location.reload();
        }, error => {
          window.alert(error.error.message);
        })
      });
  }

  //Opens the dialog popup for survey repors
  openDialogReport(template: Surveytemplate){
    const dialogConfig = new MatDialogConfig();

    //Set dialog popup settings
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    //Pass the dialog the selected template, it will load the rest
    dialogConfig.data = {
      template: template
    }
    
    //Open the dialog popup
    const dialogRef = this.dialog.open(SurveyreportdialogComponent, dialogConfig);

    //Close the dialog popup
    dialogRef.afterClosed().subscribe( data => {})

  }

  //Edit an existing template
  editTemplate(template: Surveytemplate): void {
    //Set editingTemplate to the selected template before opening the editing sub-component
    this.editingTemplate = template;
    this.editing = true;
  }

  //Open the editing subcomponent with the preset empty survey template
  createTemplate(){
    this.editing = true;
  }

  //Catches the emitted event from the editing sub-component to save a survey template
  saveTemplateHandler(template: Surveytemplate){
    //Post back the survey component to the backend
    this.surveytemplateService.postSurveyTemplate(template).subscribe(response => {
      window.location.reload();
    }, error => {
      window.alert(error.error.message);
    })
  }

}
