import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrderService } from '../../../services/order/order.service';
import { Order } from '../../../interfaces/order';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
})
export class OrderSummaryComponent implements OnInit {
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
  activeOrderId!: string;
  activeOrder!: Order;
  constructor(
    private activatedRouter: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params: Params) => {
      this.activeOrderId = params['orderId'];
      this.orderService.getOrder(params['orderId']).subscribe({
        next: (order: Order) => {
          this.activeOrder = order;
        },
        error: err => {
          console.log(err);
        },
      });
    });
    window.paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.activeOrder.totalAmount.toString(),
                  currency_code: 'USD',
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            if (details.status == 'COMPLETED') {
              this.activatedRouter.params.subscribe((params: Params) => {
                this.orderService
                  .saveOrder(params['orderId'], {
                    createTime: details.update_time,
                    paymentId: details.id,
                  })
                  .subscribe({
                    next: res => {
                      this.router.navigateByUrl(`/${this.activeOrderId}`);
                    },
                    error: err => {
                      console.log(err);
                    },
                  });
              });
            }
          });
        },
        onError: (error: any) => {
          console.log(error);
        },
      })
      .render(this.paymentRef.nativeElement);

    console.log('Hi', this.activeOrder.totalAmount);
  }
}
