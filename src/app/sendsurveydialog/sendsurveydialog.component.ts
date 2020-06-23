import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import { Surveytemplate } from "../surveylist/surveytemplate"
import { User } from "../userlist/user";

@Component({
  selector: 'app-sendsurveydialog',
  templateUrl: './sendsurveydialog.component.html',
  styleUrls: ['./sendsurveydialog.component.css']
})
export class SendsurveydialogComponent implements OnInit {
  //List of users the admin can send to
  users: User[];
  //The template being sent
  template: Surveytemplate;
  //List of users the admin is sending the survey to
  selectedUsers: User[];

  constructor(private dialogRef: MatDialogRef<SendsurveydialogComponent>, 
    @Inject(MAT_DIALOG_DATA) data) {
      //Gets data passed to the dialog component
      this.users = data.users;
      this.template = data.template;
      this.selectedUsers = [];
  }

  ngOnInit(): void {
  }

  //Sets user as selected or unselected
  toggleUser(user: User) {
    if(this.selectedUsers.includes(user)){
      this.selectedUsers.splice(this.selectedUsers.indexOf(user), 1);
    } else {
      this.selectedUsers.push(user);
    }
  }

  //Closes dialog box without sending the surveys
  close(){
    this.dialogRef.close();
  }

  //Closes dialog box and triggers sending the surveys
  send(){
    this.dialogRef.close(this.selectedUsers);
  }

}
