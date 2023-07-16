import { Component } from '@angular/core';

import { Diabetes } from '../interfaces/diabetes';
import { ServicioDiabetesService } from '../providers/servicio-diabetes.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  public data : Diabetes[] = [];

  constructor(private dataProvider: ServicioDiabetesService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Diabetes[]).slice(0,10); 
    })
  }


}
