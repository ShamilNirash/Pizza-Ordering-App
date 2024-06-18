import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth/user-auth.service';
@Injectable()
export class RequestHeaderSetInterceptor implements HttpInterceptor {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const req = this.setHeader(request);
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          // Token expired, redirect to login page
          this.userAuthService.deleteCredentials();
        }
        return throwError(error);
      })
    );
  }

  private setHeader(request: HttpRequest<any>) {
    const token = this.userAuthService.getToken();
    if (token) {
      return request.clone({ setHeaders: { token: token } });
    }
    return request;
  }
}
