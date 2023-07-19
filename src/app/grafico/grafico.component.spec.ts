import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoComponent } from './grafico.component';

describe('GraficoComponent', () => {
  let component: GraficoComponent;
  let fixture: ComponentFixture<GraficoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoComponent]
    });
    fixture = TestBed.createComponent(GraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('canvas element', ()=> {
    const fixture = TestBed.createComponent(GraficoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('canvas')).not.toBe(null);
  })

  it('No nav element', ()=> {
    const fixture = TestBed.createComponent(GraficoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav')).toBe(null);
  })
});
