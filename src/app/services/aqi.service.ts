import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AqiService {

  constructor(private http: HttpClient) { }
  consultarAQI():string{
    return (Math.random()*(200-100)+100).toString()
  }
  consultarAQIdesdeServidorBackend(){
const urlAPIAQI = "http://localhost:3030/aqi";
 return this.http.get(urlAPIAQI)//Promesas
  }
}
