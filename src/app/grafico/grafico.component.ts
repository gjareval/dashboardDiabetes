import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Diabetes } from '../interfaces/diabetes';
import { ServicioDiabetesService } from '../providers/servicio-diabetes.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  public data: Diabetes[] = [];
  public edades: string[] = [];
  public promGlucosa: number[]=[];
  chart: any;

  constructor(private dataProvider: ServicioDiabetesService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Diabetes[]).slice(100,200);

      //obtencion de las edades y el promedio
      for (let datum of this.data) {

        
        if (!(this.edades.includes(datum.Age))) {
          this.edades.push(datum.Age);
          

        }   
      }

      this.edades.sort();


      //promedio de glucosa por edad
      for(let edad2 of this.edades){
        let prom: number=0;
        let contador: number=0;
        for (let datum2 of this.data) {
          if(datum2.Age==edad2){
            prom=prom+parseInt(datum2.Glucose);
            contador+=1;
          }

        }
        prom=prom/contador;
        this.promGlucosa.push(prom);
      }

      var existingChart = Chart.getChart('graficoDiabetes');
      if (existingChart) {
        existingChart.destroy();
      }

      const dato = {
        labels: this.edades,
        datasets: [
          {
            label: 'Promedio del nivel de glucosa por edad',
            data: this.promGlucosa, 
            backgroundColor: ['rgba(56, 107, 226, 0.8)','rgba(234, 62, 62, 0.8)','rgba(48, 241, 62, 0.8)'],
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 1
          }
        ]
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

      this.chart = new Chart('graficoDiabetes', {
        type: 'bar',
        data: dato,
        options: options
      });
    });
  }
}
