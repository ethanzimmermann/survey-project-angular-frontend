import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Input value representing the current home view
  @Input()
  currentView: string;

  //Emitter used to communicate which view to display on the home view
  @Output()
  viewChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //Sets current view to user list
  showUserList(){
    this.currentView = "userList";
    this.viewChanged.emit(this.currentView);
  }

  //Sets current view to survey list
  showSurveyList(){
    this.currentView = "surveyList";
    this.viewChanged.emit(this.currentView);
  }

}
