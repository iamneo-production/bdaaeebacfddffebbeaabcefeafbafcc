import { TestBed } from '@angular/core/testing';

import { ApplydocumentService } from './applydocument.service';

describe('ApplydocumentService', () => {
  
  let service: ApplydocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplydocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
