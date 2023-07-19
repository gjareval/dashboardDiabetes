import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ServicioDiabetesService } from './servicio-diabetes.service';
import { Diabetes } from '../interfaces/diabetes';

describe('ServicioDiabetesService', () => {
  let service: ServicioDiabetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],

      providers: [ ServicioDiabetesService ]
    });
    
    service = TestBed.inject(ServicioDiabetesService);
  });

  it('Service should return value from observable', (done: DoneFn) => {
    //Invoque el método con la petición asincrónica
    service.getResponse().subscribe(data => {
      
      // Valide que la respuesta sea mayor que 0
      expect((data as Diabetes[]).length).toBeGreaterThan(0)
      
      // Que espere hasta que llegue la respuesta 
      done();
    });
  });

});