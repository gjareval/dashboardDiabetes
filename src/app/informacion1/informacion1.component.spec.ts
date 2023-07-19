import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informacion1Component } from './informacion1.component';

describe('Informacion1Component', () => {
  let component: Informacion1Component;
  let fixture: ComponentFixture<Informacion1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Informacion1Component]
    });
    fixture = TestBed.createComponent(Informacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('div element', ()=> {
    const fixture = TestBed.createComponent(Informacion1Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div')).not.toBe(null);
  })

  it('No nav element', ()=> {
    const fixture = TestBed.createComponent(Informacion1Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav')).toBe(null);
  })
});
