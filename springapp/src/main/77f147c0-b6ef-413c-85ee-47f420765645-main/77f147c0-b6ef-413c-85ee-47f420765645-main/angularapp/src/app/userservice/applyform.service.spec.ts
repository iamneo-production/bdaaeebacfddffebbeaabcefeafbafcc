import { TestBed } from '@angular/core/testing';

import { ApplyformService } from './applyform.service';

describe('ApplyformService', () => {
  
  let service: ApplyformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
