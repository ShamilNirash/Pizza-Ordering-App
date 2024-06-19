import { Component, OnInit } from '@angular/core';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { Pizza } from '../../../interfaces/pizza';
import { NgFor } from '@angular/common';
import { PizzaService } from '../../../services/pizza/pizza.service';

@Component({
  selector: 'app-menu-body',
  standalone: true,
  imports: [MenuCardComponent, NgFor],
  templateUrl: './menu-body.component.html',
  styleUrl: './menu-body.component.scss',
})
export class MenuBodyComponent implements OnInit {
  pizzaList!: Pizza[];
  pizzaListUpdate!: Pizza[];
  constructor(private pizzaService: PizzaService) {}
  ngOnInit(): void {
    this.pizzaService.getPizzaList().subscribe({
      next: (res: Pizza[]) => {
        this.pizzaList = res;
        this.pizzaListUpdate = res;
      },
      error: err => {
        console.log(err);
      },
    });
  }
  onClickSearch(name: string) {
    if (name) {
      this.pizzaListUpdate = this.pizzaList.filter(pizza =>
        pizza.name.toLowerCase().includes(name.toLowerCase())
      );
    } else {
      this.pizzaListUpdate = this.pizzaList;
    }
  }
}
