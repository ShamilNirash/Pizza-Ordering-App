import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  
   private isDisplay= new BehaviorSubject<boolean>(false);
  constructor() { }
  showLoading(){
    this.isDisplay.next(true);
  }
  hideLoading(){
    this.isDisplay.next(false);
  }
  displayLoading(){ 
    return this.isDisplay.asObservable();
  }
}
