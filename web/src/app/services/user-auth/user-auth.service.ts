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
    this.URL_BASE = 'http://localhost:3000/user';
  }

  //already user post method
  signInPost(email: string, password: string) {
    return this.http
      .post(
        `${this.URL_BASE}/signIn`,
        { email, password },
        { observe: 'response' }
      )
      .pipe(
        tap((res: HttpResponse<any>) => {
          this.saveCredentials(res.headers.get('token') || '', res.body);
        })
      );
  }
  signUpPost(
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    contactNo: string,
    password: string
  ) {
    return this.http
      .post(
        `${this.URL_BASE}/signUp`,
        { firstName, lastName, address, email, contactNo, password },
        { observe: 'response' }
      )
      .pipe(
        tap((res: HttpResponse<any>) => {
          this.saveCredentials(res.headers.get('token') || '', res.body);
        })
      );
  }
  getUserInformation(): Observable<User> {
    return this.http.get<User>(`${this.URL_BASE}/data`);
  }
  deleteUser(): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<any>>(`${this.URL_BASE}/delete`);
  }
  updateUserDetails(object: Object) {
    return this.http.patch(`${this.URL_BASE}/update`, object, {
      observe: 'response',
    });
  }
  updateUserPassword(object: Object) {
    return this.http.patch(`${this.URL_BASE}/update-pw`, object, {
      observe: 'response',
    });
  }
  saveCredentials(token: string, id: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
  }
  deleteCredentials() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }
  getId() {
    return localStorage.getItem('id');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
