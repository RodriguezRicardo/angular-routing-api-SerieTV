import { TestBed } from '@angular/core/testing';

import { SerieTVServiceService } from './serie-tvservice.service';

describe('SerieTVServiceService', () => {
  let service: SerieTVServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieTVServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
