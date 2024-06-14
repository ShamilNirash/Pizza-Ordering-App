import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../../../../interfaces/pizza';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgIf, NgClass, RatingModule, FormsModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss',
})
export class MenuCardComponent implements OnInit {
  @Input() pizzaDetails!: Pizza;
  sizeVersion: string = 'M';
  priceVersion: string = '';
  heartSolidIcon = faSolidHeart;
  heartRegularIcon = faRegularHeart;
  isFavorite = false;
  value!: number;

  ngOnInit(): void {
    this.pizzaDetails.prizeWithSize.forEach(item => {
      if (item.size == this.sizeVersion) {
        this.priceVersion = item.price;
      }
    });
    this.value = this.pizzaDetails.stars;
  }
  onClickSize(size: string, price: string) {
    this.sizeVersion = size;
    this.priceVersion = price;
    console.log(this.sizeVersion);
  }
  onClickFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
