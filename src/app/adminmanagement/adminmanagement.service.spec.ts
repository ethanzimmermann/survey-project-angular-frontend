import { TestBed } from '@angular/core/testing';

import { AdminmanagementService } from './adminmanagement.service';

describe('AdminmanagementService', () => {
  let service: AdminmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
