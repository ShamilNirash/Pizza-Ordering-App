import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../../../services/order/order.service';
import { Order } from '../../../interfaces/order';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
})
export class OrderSummaryComponent implements OnInit {
  activeOrder!: Order;
  constructor(
    private activatedRouter: ActivatedRoute,
    private orderService: OrderService
  ) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params: Params) => {
      this.orderService.getOrder(params['orderId']).subscribe({
        next: (order: Order) => {
          this.activeOrder = order;
          console.log(this.activeOrder);
          
        },
        error: err => {
          console.log(err);
        },
      });
    });
  }
}
