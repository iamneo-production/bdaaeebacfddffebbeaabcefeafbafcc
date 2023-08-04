import { TestBed } from '@angular/core/testing';

import { CorrectiondocsService } from './correctiondocs.service';

describe('CorrectiondocsService', () => {
  let service: CorrectiondocsService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrectiondocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
