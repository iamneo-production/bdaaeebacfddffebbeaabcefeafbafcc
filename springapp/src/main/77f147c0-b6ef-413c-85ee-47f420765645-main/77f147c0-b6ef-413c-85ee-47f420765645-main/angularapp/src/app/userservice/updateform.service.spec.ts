import { TestBed } from '@angular/core/testing';

import { UpdateformService } from './updateform.service';

describe('UpdateformService', () => {
  let service: UpdateformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
