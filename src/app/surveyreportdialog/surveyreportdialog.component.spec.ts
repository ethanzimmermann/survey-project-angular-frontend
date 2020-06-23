import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyreportdialogComponent } from './surveyreportdialog.component';

describe('SurveyreportdialogComponent', () => {
  let component: SurveyreportdialogComponent;
  let fixture: ComponentFixture<SurveyreportdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyreportdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyreportdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
