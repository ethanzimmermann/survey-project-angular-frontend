import { TestBed } from '@angular/core/testing';

import { SurveytemplateService } from './surveytemplate.service';

describe('SurveytemplateService', () => {
  let service: SurveytemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveytemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
