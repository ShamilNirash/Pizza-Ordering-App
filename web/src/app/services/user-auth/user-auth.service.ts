import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs';

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
      .post(`${this.URL_BASE}/user/signIn`, { email, password },{observe:'response'})
      .pipe(
        tap((res: HttpResponse<any>) => {
          localStorage.setItem('token',res.headers.get('token')||'');
          localStorage.setItem('id',res.body)
        })
      );
  }
  get() {
    this.http.get(`${this.URL_BASE}//signIn/user`);
  }
}
