import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { OrderSummaryComponent } from '../../component/payment/order-summary/order-summary.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,OrderSummaryComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

}
