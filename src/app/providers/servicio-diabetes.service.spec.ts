import { TestBed } from '@angular/core/testing';

import { ServicioDiabetesService } from './servicio-diabetes.service';

describe('ServicioDiabetesService', () => {
  let service: ServicioDiabetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDiabetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
