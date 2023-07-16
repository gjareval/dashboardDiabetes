import { Component } from '@angular/core';
import { Chart } from '../interfaces/chart';

@Component({
  selector: 'app-informacion2',
  templateUrl: './informacion2.component.html',
  styleUrls: ['./informacion2.component.css']
})
export class Informacion2Component {
  chart1: Chart;
  chart2: Chart;
  chart3: Chart;
  chart4: Chart;

  constructor(){
    this.chart1 = {
      title: 'IMC ',
      content: 'El IMC (Índice de Masa Corporal) es una medida que evalúa la relación entre el peso y la altura de una persona. Se calcula dividiendo el peso en kilogramos entre el cuadrado de la altura en metros. El IMC se utiliza como indicador general de sobrepeso, obesidad o bajo peso, pero no considera la composición corporal específica.'
    };

    this.chart2 = {
      title: 'Glucosa ',
      content: 'La glucosa es un tipo de azúcar que se encuentra en los alimentos que consumimos y es la principal fuente de energía para el cuerpo. Es absorbida por el torrente sanguíneo después de la digestión de los carbohidratos y se utiliza como combustible por las células para realizar sus funciones. Los niveles de glucosa en la sangre son regulados por la insulina.'
    };

    this.chart3 = {
      title: 'Presión sanguínea ',
      content: 'La presión sanguínea es la fuerza ejercida por la sangre contra las paredes de las arterias cuando el corazón late y se relaja. Se expresa en dos valores: la presión sistólica (la presión máxima durante la contracción del corazón) y la presión diastólica (la presión mínima cuando el corazón está en reposo). Se mide en milímetros de mercurio (mmHg).'
    };

    this.chart4 = {
      title: 'Insulina ',
      content: 'La insulina es una hormona producida por el páncreas que desempeña un papel crucial en el metabolismo de la glucosa. Permite que las células del cuerpo utilicen la glucosa como fuente de energía al facilitar su absorción y almacenamiento. La insulina también ayuda a regular los niveles de glucosa en la sangre. La falta de insulina puede dar lugar a la diabetes.'
    };
  }
}
