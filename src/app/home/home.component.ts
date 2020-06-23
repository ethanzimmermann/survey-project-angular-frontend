import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Determines which list view to display
  currentView = "userList";

  constructor() { }

  ngOnInit(): void {
  }

  //Gets the emitted value from the header component
  viewChangeHandler(view: string){
    this.currentView=view;
  }

}
