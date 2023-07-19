import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaComponent } from './tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioDiabetesService } from '../providers/servicio-diabetes.service';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaComponent],
      imports: [ HttpClientModule ],
      providers: [ ServicioDiabetesService ]
    });
    fixture = TestBed.createComponent(TablaComponent);
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