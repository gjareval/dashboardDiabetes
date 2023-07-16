import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioDiabetesService {

  private URL: string ='https://diabetes-d1dac-default-rtdb.firebaseio.com/collection.json';
  
  constructor(private http:HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
  }
}
