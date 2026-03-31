import { TestBed } from '@angular/core/testing';

import { LogapiService } from './logapi.service';

describe('LogapiService', () => {
  let service: LogapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
