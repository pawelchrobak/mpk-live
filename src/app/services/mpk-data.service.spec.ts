import { TestBed } from '@angular/core/testing';

import { MpkDataService } from './mpk-data.service';

describe('MpkDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MpkDataService = TestBed.get(MpkDataService);
    expect(service).toBeTruthy();
  });
});
