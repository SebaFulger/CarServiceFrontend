import { TestBed } from '@angular/core/testing';

import { ServiceRecord } from './service-record';

describe('ServiceRecord', () => {
  let service: ServiceRecord;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRecord);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
