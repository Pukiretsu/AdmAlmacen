import { TestBed } from '@angular/core/testing';

import { PrestantesService } from './prestantes.service';

describe('PrestantesService', () => {
  let service: PrestantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
