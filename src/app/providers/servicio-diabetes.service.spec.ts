import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServicioDiabetesService } from './servicio-diabetes.service';

describe('ServicioDiabetesService', () => {
  let servicio: ServicioDiabetesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicioDiabetesService]
    });
    servicio = TestBed.inject(ServicioDiabetesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve response from the API', () => {
    const mockResponse = { key: 'value' };

    servicio.getResponse().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://diabetes-d1dac-default-rtdb.firebaseio.com/collection.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
