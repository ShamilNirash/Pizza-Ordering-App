import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../../interfaces/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
   private  URL_BASE:string;
  constructor(private http:HttpClient) { 
    this.URL_BASE="http://localhost:3000";
  }
  getPizzaList():Observable<Pizza[]>{
return this.http.get<Pizza[]>(`${this.URL_BASE}/pizza/data`);
  }
}
