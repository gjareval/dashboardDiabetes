
import { Component, OnInit } from '@angular/core';


import { Diabetes } from '../interfaces/diabetes';

import { Chart } from 'chart.js/auto';
import { ServicioDiabetesService } from '../providers/servicio-diabetes.service';


@Component({
  selector: 'app-grafico2',
  templateUrl: './grafico2.component.html',
  styleUrls: ['./grafico2.component.css']
})


export class Grafico2Component implements OnInit {


  public data : Diabetes[] = [];
  public conteoEdades: number[] = [];

  constructor(private dataProvider: ServicioDiabetesService) { }

  // Método ngOnInit para obtener los datos y crear el gráfico al inicializar el componente
  ngOnInit() {
    this.obtenerDatosDiabetes();
  }


 /*majo*/
  clasificarEdad(edad: number): string {
    if (edad < 18) {
      return "Menor de edad";
    } else if (edad < 30) {
      return "Adulto Joven";
    } else if (edad < 65) {
      return "Adulto";
    } else {
      return "Adulto Mayor";
    }
  }


  obtenerDatosDiabetes() {
    this.dataProvider.getResponse().subscribe((data: any) => {
      // convertimos el JSON a un array de objetos Diabetes
      this.data = Object.values(data) as Diabetes[];
      this.contarEdades()
      this.crearGraficoPie();
    });
  }

  contarEdades() {
    let grupoConteo:any = {};
    for (const dato of this.data) {
      if(parseInt(dato.Glucose)>=126){
        const edadClasificada = this.clasificarEdad(parseInt(dato.Age));
        grupoConteo[edadClasificada] = (grupoConteo[edadClasificada] || 0) + 1;
      }
    }

    this.conteoEdades = Object.values(grupoConteo);
  }


  crearGraficoPie() {

    var existingChart = Chart.getChart('diabetesChart');
      if (existingChart) {
        existingChart.destroy();
    }

    const canvas = document.getElementById('diabetesChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 100;

    new Chart(ctx!, {
      type: 'pie',
      data: {
        labels: ['Adulto', 'Adulto Joven', 'Adulto Mayor', 'Menor de edad'],
        datasets: [{
          data: this.conteoEdades,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(99, 255, 99, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          title: {
            display: true,
            text: 'Personas con diabetes en base al rango de edades'
          }
      }
      },

    });
  /*majo*/
}



}
