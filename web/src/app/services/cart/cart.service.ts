import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../../interfaces/cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly URL_BASE: string;
  constructor(private http: HttpClient) {
    this.URL_BASE = 'http://localhost:3000/cart';
  }
  createNewCart(order: object): Observable<Cart> {
    return this.http.post<Cart>(`${this.URL_BASE}/data`, order);
  }
  getUserCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.URL_BASE}/data`);
  }
  updateUserCart(
    cartId: string,
    object: Object
  ): Observable<HttpResponse<Cart>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<Cart>(
      `${this.URL_BASE}/update-cart/${cartId}`,
      object,{ headers, observe: 'response' }
    );
  }
}
