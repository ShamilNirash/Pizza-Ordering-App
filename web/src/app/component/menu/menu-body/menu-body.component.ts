import { Component } from '@angular/core';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { Pizza } from '../../../interfaces/pizza';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu-body',
  standalone: true,
  imports: [MenuCardComponent, NgFor],
  templateUrl: './menu-body.component.html',
  styleUrl: './menu-body.component.scss',
})
export class MenuBodyComponent {
  pizzaList: Pizza[] = [
    {
      id: '1',
      name: 'Chicken pizza',
      prizeWithSize: [
        { price: '1000', size: 'S' },
        { price: '1500', size: 'M' },
        { price: '2000', size: 'L' },
      ],
      tags: ['Vegetarian', 'Cheese'],
      favorite: true,
      stars: 3,
      imgUrl: '../../../../assets/images/MenuSection/coverPhoto.jpg',
    },
    {
      id: '1',
      name: 'Pani Bacon Chilli Pizza',
      prizeWithSize: [
        { price: '1000', size: 'S' },
        { price: '1500', size: 'M' },
        { price: '2000', size: 'L' },
      ],
      tags: ['Vegetarian', 'Cheese'],
      favorite: true,
      stars: 4.5,
      imgUrl: '../../../../assets/images/MenuSection/coverPhoto.jpg',
    },
    {
      id: '1',
      name: 'Chicken pizza',
      prizeWithSize: [
        { price: '1000', size: 'S' },
        { price: '1500', size: 'M' },
        { price: '2000', size: 'L' },
      ],
      tags: ['Vegetarian', 'Cheese'],
      favorite: true,
      stars: 3,
      imgUrl: '../../../../assets/images/MenuSection/coverPhoto.jpg',
    },
    {
      id: '1',
      name: 'Chicken pizza',
      prizeWithSize: [
        { price: '1000', size: 'S' },
        { price: '1500', size: 'M' },
        { price: '2000', size: 'L' },
      ],
      tags: ['Vegetarian', 'Cheese'],
      favorite: true,
      stars: 3,
      imgUrl: '../../../../assets/images/MenuSection/coverPhoto.jpg',
    },
    {
      id: '1',
      name: 'Chicken pizza',
      prizeWithSize: [
        { price: '1000', size: 'S' },
        { price: '1500', size: 'M' },
        { price: '2000', size: 'L' },
      ],
      tags: ['Vegetarian', 'Cheese'],
      favorite: true,
      stars: 3,
      imgUrl: '../../../../assets/images/MenuSection/coverPhoto.jpg',
    },
    {
      id: '1',
      name: 'Chicken pizza',
      prizeWithSize: [
        { price: '1000', size: 'S' },
        { price: '1500', size: 'M' },
        { price: '2000', size: 'L' },
      ],
      tags: ['Vegetarian', 'Cheese'],
      favorite: true,
      stars: 3,
      imgUrl: '../../../../assets/images/MenuSection/coverPhoto.jpg',
    },
    {
      id: '1',
      name: 'Chicken pizza',
      prizeWithSize: [
        { price: '1000', size: 'S' },
        { price: '1500', size: 'M' },
        { price: '2000', size: 'L' },
      ],
      tags: ['Vegetarian', 'Cheese'],
      favorite: true,
      stars: 3,
      imgUrl: '../../../../assets/images/MenuSection/coverPhoto.jpg',
    },
    {
      id: '1',
      name: 'Chicken pizza',
      prizeWithSize: [
        { price: '1000', size: 'S' },
        { price: '1500', size: 'M' },
        { price: '2000', size: 'L' },
      ],
      tags: ['Vegetarian', 'Cheese'],
      favorite: true,
      stars: 3,
      imgUrl: '../../../../assets/images/MenuSection/coverPhoto.jpg',
    },
    {
      id: '1',
      name: 'Chicken pizza',
      prizeWithSize: [
        { price: '1000', size: 'S' },
        { price: '1500', size: 'M' },
        { price: '2000', size: 'L' },
      ],
      tags: ['Vegetarian', 'Cheese'],
      favorite: true,
      stars: 3,
      imgUrl: '../../../../assets/images/MenuSection/coverPhoto.jpg',
    },
  ];
}
