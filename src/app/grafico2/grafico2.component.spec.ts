import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Grafico2Component } from './grafico2.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioDiabetesService } from '../providers/servicio-diabetes.service';

describe('GraficoComponent', () => {
  let component: Grafico2Component;
  let fixture: ComponentFixture<Grafico2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grafico2Component],
      imports: [ HttpClientModule ],
      providers: [ ServicioDiabetesService ]
    });
    fixture = TestBed.createComponent(Grafico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should request service user after Angular calls ngOnInit', (done: DoneFn) => {

    // Llame a ngOnInit para simular el ciclo de vida del componente
    component.ngOnInit();


    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
    fixture.whenStable().then(() => {
      

      // Valide que la respuesta sea mayor que 0
      expect(component.data.length).toBeGreaterThan(0)

      // Que espere hasta que llegue la respuesta
      done();

    });
  });
});
