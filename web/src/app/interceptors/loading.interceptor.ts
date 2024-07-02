import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { LoadingService } from '../services/loading/loading.service';
import { Observable, tap } from 'rxjs';
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}
  pendingRequests = 0;
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.showLoading();
    this.pendingRequests = this.pendingRequests + 1;
    return next.handle(request).pipe(
      tap({
        next: res => {
          if (res.type === HttpEventType.Response) {
            this.hideLoading();
          }
        },
        error: err => {
          this.hideLoading();
        },
      })
    );
  }

  hideLoading() {
    this.pendingRequests -= 1;
    if (this.pendingRequests == 0) {
      this.loadingService.hideLoading();
    }
  }
}
