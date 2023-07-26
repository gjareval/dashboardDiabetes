import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficoComponent } from './grafico/grafico.component';
import { Grafico2Component } from './grafico2/grafico2.component';
import { Informacion1Component } from './informacion1/informacion1.component';
import { Informacion2Component } from './informacion2/informacion2.component';
import { TablaComponent } from './tabla/tabla.component';
 

  describe('AppComponent', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,

          //Registre el módulo para realizar peticiones asincrónicas
          HttpClientModule
        ],
        declarations: [

        	//Registre TODOS los componentes que son instanciados en la aplicación mediante un selector
          GraficoComponent,
          Grafico2Component,
          Informacion1Component,
          Informacion2Component,
          TablaComponent,
    
        ],
      }).compileComponents();
    });


    //Valide por la existencia de TODOS los componentes que son instanciados en la aplicación mediante un selector
    it('should have the Appcomponent', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('main')).not.toBe(null);
    });

    it('should have the TablaComponent', () => {
      const fixture = TestBed.createComponent(TablaComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('table')).not.toBe(null);
    });

    it('should have the GraficoComponent', () => {
      const fixture = TestBed.createComponent(GraficoComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div')).not.toBe(null);
    });

    it('should have the Grafico2Component', () => {
      const fixture = TestBed.createComponent(Grafico2Component);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div')).not.toBe(null);
    });

    it('should have the Informacion1Component', () => {
      const fixture = TestBed.createComponent(Informacion1Component);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div')).not.toBe(null);
    });

    it('should have the Informacion2Component', () => {
      const fixture = TestBed.createComponent(Informacion2Component);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div')).not.toBe(null);
    });

    

  });
