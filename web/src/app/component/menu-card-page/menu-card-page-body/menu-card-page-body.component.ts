import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingModule } from 'primeng/rating';
import { faArrowRight, faL } from '@fortawesome/free-solid-svg-icons';
import { Pizza } from '../../../interfaces/pizza';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PizzaService } from '../../../services/pizza/pizza.service';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { UserAuthService } from '../../../services/user-auth/user-auth.service';

@Component({
  selector: 'app-menu-card-page-body',
  standalone: true,
  imports: [RatingModule, FormsModule,NgFor,FontAwesomeModule,NgIf],
  templateUrl: './menu-card-page-body.component.html',
  styleUrl: './menu-card-page-body.component.scss'
})
export class MenuCardPageBodyComponent implements OnInit {
  pizza!:Pizza;
  arrowIcon=faArrowRight;
  isFavorite=false;
  heartSolidIcon=faSolidHeart;
  heartRegularIcon=faRegularHeart;
  test!:string;
constructor(private activatedRouter:ActivatedRoute,private pizzaService:PizzaService,private userAuthService:UserAuthService,private router:Router){

}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe({
      next:(params:Params)=>{
       if(params['cardId']){
        this.pizzaService.getPizzaList().subscribe({
            next:(res:Pizza[])=>{
                  res.forEach((pizzaUnit)=>{
                   if(pizzaUnit._id===params['cardId']) {
                     this.pizza=pizzaUnit;
                   }
                  })
            }
           })
       }
      }
    })
  }
  onClickFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  onClickAddToCart(){
   this.test =this.userAuthService.getId()||'';
   if(this.test){
   }
   else{
this.router.navigateByUrl("/sign-in");
   }
  }
}
