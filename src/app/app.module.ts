import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Informacion1Component } from './informacion1/informacion1.component';
import { GraficoComponent } from './grafico/grafico.component';
import { TablaComponent } from './tabla/tabla.component';
import { Informacion2Component } from './informacion2/informacion2.component';
import { HttpClientModule } from  '@angular/common/http';
import { Grafico2Component } from './grafico2/grafico2.component';

@NgModule({
  declarations: [
    AppComponent,
    Informacion1Component,
    GraficoComponent,
    TablaComponent,
    Informacion2Component,
    Grafico2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
