import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TablaComponent } from './tabla.component';
import { Diabetes } from '../interfaces/diabetes';
import { of } from 'rxjs';
import { ServicioDiabetesService } from '../providers/servicio-diabetes.service';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;
  let servicioDiabetesMock: Partial<ServicioDiabetesService>;

  const mockData: Diabetes[] = [
    { Age: '50',BMI:'33.6', BloodPressure:'72', Glucose:'148', Insulin:'0'},
    { Age: '31',BMI:'36.6', BloodPressure:'66', Glucose:'45', Insulin:'0'},
    { Age: '32',BMI:'23.3', BloodPressure:'64', Glucose:'183', Insulin:'0'},
    { Age: '21',BMI:'28.1', BloodPressure:'66', Glucose:'89', Insulin:'94'},
    { Age: '33',BMI:'43.1', BloodPressure:'40', Glucose:'137', Insulin:'168'},

  ];

  beforeEach(async () => {
    servicioDiabetesMock = {
      getResponse: jasmine.createSpy('getResponse').and.returnValue(of(mockData))
    };

    await TestBed.configureTestingModule({
      declarations: [TablaComponent],
      providers: [{ provide: ServicioDiabetesService, useValue: servicioDiabetesMock }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch data and assign it to the data property', () => {
    expect(servicioDiabetesMock.getResponse).toHaveBeenCalled();
    expect(component.data).toEqual(mockData.slice(0, 5));
  });
});