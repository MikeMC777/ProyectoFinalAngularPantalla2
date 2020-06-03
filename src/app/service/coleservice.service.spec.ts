import { TestBed } from '@angular/core/testing';

import { ColeserviceService } from './coleservice.service';

describe('ColeserviceService', () => {
  let service: ColeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
