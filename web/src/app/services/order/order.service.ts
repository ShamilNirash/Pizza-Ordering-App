import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../interfaces/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly BASE_URL;
  constructor(private http: HttpClient) {
    this.BASE_URL = 'http://localhost:3000/order';
  }

  createNewOrder(object: Object): Observable<HttpResponse<Order>> {
    return this.http.post<Order>(`${this.BASE_URL}/newOrder`, object, {
      observe: 'response',
    });
  }

  getOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.BASE_URL}/${orderId}`);
  }
  saveOrder(orderId: string, object: Object): Observable<HttpResponse<any>> {
    console.log('object', object);
    console.log('id', orderId);

    return this.http.patch<any>(`${this.BASE_URL}/${orderId}`, object);
  }
}
