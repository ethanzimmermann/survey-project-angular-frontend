import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Surveytemplate } from '../surveylist/surveytemplate';

@Component({
  selector: 'app-surveyedit',
  templateUrl: './surveyedit.component.html',
  styleUrls: ['./surveyedit.component.css']
})
export class SurveyeditComponent implements OnInit {
  //Field for new question input
  newQuestion: string;

  //Current survey template
  @Input()
  editingTemplate: Surveytemplate;

  //Emitter for sending back the survey template
  @Output()
  saveTemplate: EventEmitter<Surveytemplate> = new EventEmitter();
  
  //Set new question to empty initially
  constructor() { 
    this.newQuestion = "";
  }

  ngOnInit(): void {
  }

  //Add the newQuestion field to the template's questions property
  addQuestion(){
    this.editingTemplate.questions.push(this.newQuestion);
    this.newQuestion = "";
  }

  //Emits to parent component that the template is ready to save
  saveEditing(){
    this.saveTemplate.emit(this.editingTemplate);
  }

  //Allows tracking index on the component
  trackByIndex(index: Number, question: string){
    return index;
  }

}
