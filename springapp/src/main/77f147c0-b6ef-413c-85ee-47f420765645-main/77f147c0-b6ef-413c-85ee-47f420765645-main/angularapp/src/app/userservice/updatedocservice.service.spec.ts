import { TestBed } from '@angular/core/testing';

import { UpdatedocserviceService } from './updatedocservice.service';

describe('UpdatedocserviceService', () => {
  let service: UpdatedocserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatedocserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
