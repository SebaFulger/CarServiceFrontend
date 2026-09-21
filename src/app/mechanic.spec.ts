import { TestBed } from '@angular/core/testing';

import { Mechanic } from './mechanic';

describe('Mechanic', () => {
  let service: Mechanic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mechanic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
