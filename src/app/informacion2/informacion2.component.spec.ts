import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informacion2Component } from './informacion2.component';

describe('Informacion2Component', () => {
  let component: Informacion2Component;
  let fixture: ComponentFixture<Informacion2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Informacion2Component]
    });
    fixture = TestBed.createComponent(Informacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
