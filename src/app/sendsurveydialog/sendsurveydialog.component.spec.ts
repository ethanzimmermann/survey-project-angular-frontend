import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendsurveydialogComponent } from './sendsurveydialog.component';

describe('SendsurveydialogComponent', () => {
  let component: SendsurveydialogComponent;
  let fixture: ComponentFixture<SendsurveydialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendsurveydialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendsurveydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
