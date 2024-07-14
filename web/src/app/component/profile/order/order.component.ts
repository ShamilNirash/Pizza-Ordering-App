import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { Order } from '../../../interfaces/order';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit {
  orders!: Order[];
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.orderService.getUserAllOrders().subscribe({
      next: res => {
        if (res.status == 200) {
          this.orders = res.body.message;
        }
      },
      error: err => {
        console.log(err);
      },
    });
  }
}
