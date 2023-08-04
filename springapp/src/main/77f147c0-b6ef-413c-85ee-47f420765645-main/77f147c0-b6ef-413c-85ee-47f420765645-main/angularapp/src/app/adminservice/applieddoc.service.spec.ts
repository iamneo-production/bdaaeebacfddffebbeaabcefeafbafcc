import { TestBed } from '@angular/core/testing';

import { ApplieddocService } from './applieddoc.service';

describe('ApplieddocService', () => {
  let service: ApplieddocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplieddocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
