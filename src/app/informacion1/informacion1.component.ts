import { Component } from '@angular/core';
import { Chart } from '../interfaces/chart';

@Component({
  selector: 'app-informacion1',
  templateUrl: './informacion1.component.html',
  styleUrls: ['./informacion1.component.css']
})
export class Informacion1Component {
  chart1: Chart;
  chart2: Chart;
  chart3: Chart;
  chart4: Chart;

  constructor (){

    this.chart1 = {
      title: '¿Qué es? ',
      content: 'La diabetes es una enfermedad crónica que afecta la forma en que el cuerpo procesa y utiliza la glucosa (azúcar) en la sangre.'
    };

    this.chart2 = {
      title: 'Síntomas ',
      content: 'Los síntomas de la diabetes incluyen sed excesiva y aumento de la frecuencia urinaria, junto con fatiga persistente.'
    };

    this.chart3 = {
      title: 'Factores de riesgo ',
      content: 'Los factores de riesgo de la diabetes incluyen la obesidad, la inactividad física y antecedentes familiares de la enfermedad.'
    };

    this.chart4 = {
      title: 'Tratamiento ',
      content: 'El tratamiento de la diabetes puede incluir cambios en el estilo de vida, como una dieta saludable y actividad física regular.'
    };
  }
}
