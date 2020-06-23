import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyeditComponent } from './surveyedit.component';

describe('SurveyeditComponent', () => {
  let component: SurveyeditComponent;
  let fixture: ComponentFixture<SurveyeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
