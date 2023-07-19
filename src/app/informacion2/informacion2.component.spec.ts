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

  it('div element', ()=> {
    const fixture = TestBed.createComponent(Informacion2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div')).not.toBe(null);
  })

//Valide la NO existencia de un elemento <p> en la plantilla html del elemento

it('No nav element', ()=> {
  const fixture = TestBed.createComponent(Informacion2Component);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('nav')).toBe(null);
})
});
