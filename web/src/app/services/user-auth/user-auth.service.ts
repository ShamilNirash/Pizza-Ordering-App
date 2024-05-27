import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  readonly URL_BASE: string;
  constructor(private http: HttpClient) {
    this.URL_BASE = 'http://localhost:3000';
  }

  //already user post method
  signInPost(email: string, password: string) {
    return this.http
      .post(
        `${this.URL_BASE}/user/signIn`,
        { email, password },
        { observe: 'response' }
      )
      .pipe(
        tap((res: HttpResponse<any>) => {
          this.saveCredentials(res.headers.get('token') || '', res.body);
        })
      );
  }
  getUserInformation(id: string): Observable<User> {
    return this.http.get<User>(`${this.URL_BASE}/user/data/${id}`);
  }

  saveCredentials(token: string, id: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
  }
  getId() {
    return localStorage.getItem('id');
  }
}