import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { ActivatedRoute, Params, } from '@angular/router';
import { Order } from '../../../interfaces/order';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order-summary-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary-content.component.html',
  styleUrl: './order-summary-content.component.scss',
})
export class OrderSummaryContentComponent implements OnInit {
  @Input() imgUrl:string='';
  currentOrder!: Order;
  PaymentStatus!: string;
  constructor(
    private OrderService: OrderService,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.OrderService.getOrder(params['orderId']).subscribe({
        next: (order: Order) => {
          this.currentOrder = order;
          if (this.currentOrder.isPayed) this.PaymentStatus = 'PAYED';
          else this.PaymentStatus = 'NotPAYED';
        },
        error: err => {
          console.log(err);
        },
      });
    });
  }
}
