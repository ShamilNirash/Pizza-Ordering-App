import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsPersonService {
private isPerson:boolean=false;
  getIsPersonValue(){
    return this.isPerson;
  }
  setIsPersonValue(value:boolean){
    this.isPerson=value;
  }
}
