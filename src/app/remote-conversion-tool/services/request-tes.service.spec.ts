import { TestBed } from '@angular/core/testing';

import { RequestTesService } from './request-tes.service';

describe('RequestTesService', () => {
  let service: RequestTesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestTesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
