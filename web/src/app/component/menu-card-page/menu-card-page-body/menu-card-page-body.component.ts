import { NgClass, NgFor, NgIf } from '@angular/common';
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
import { CartService } from '../../../services/cart/cart.service';
import { Cart } from '../../../interfaces/cart';

@Component({
  selector: 'app-menu-card-page-body',
  standalone: true,
  imports: [RatingModule, FormsModule, NgFor, FontAwesomeModule, NgIf, NgClass],
  templateUrl: './menu-card-page-body.component.html',
  styleUrl: './menu-card-page-body.component.scss',
})
export class MenuCardPageBodyComponent implements OnInit {
  pizza!: Pizza;
  arrowIcon = faArrowRight;
  isFavorite = false;
  heartSolidIcon = faSolidHeart;
  heartRegularIcon = faRegularHeart;
  test!: string;
  isClickedOnPrize: boolean = false;
  clickedSize!: string;
  relatedPriceForMediumPizza: any;
  constructor(
    private activatedRouter: ActivatedRoute,
    private pizzaService: PizzaService,
    private userAuthService: UserAuthService,
    private router: Router,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe({
      next: (params: Params) => {
        if (params['cardId']) {
          this.pizzaService.getPizzaList().subscribe({
            next: (res: Pizza[]) => {
              res.forEach(pizzaUnit => {
                if (pizzaUnit._id === params['cardId']) {
                  this.pizza = pizzaUnit;
                }
              });
            },
          });
        }
      },
    });
  }
  onClickFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  onClickAddToCart() {
    this.relatedPriceForMediumPizza = this.pizza.prizeWithSize.find(
      unit => unit.size == 'M'
    );

    this.cartService
      .createNewCart({
        pizza_id: this.pizza._id,
        pizza_name: this.pizza.name,
        quantity: 1,
        sizeAndPrice: {
          size: 'M',
          price: this.relatedPriceForMediumPizza.price,
        },
        allSizeAndPrice:this.pizza.prizeWithSize

        
      })
      .subscribe({
        next: (cart: Cart) => {
          //refresh activated route path
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([this.router.url]);
        },
        error: err => {
          console.log(err);
          this.router.navigateByUrl('/sign-in');
        },
      });
  }
}
