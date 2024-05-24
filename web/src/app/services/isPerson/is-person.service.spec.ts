import { TestBed } from '@angular/core/testing';

import { IsPersonService } from './is-person.service';

describe('IsPersonService', () => {
  let service: IsPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
