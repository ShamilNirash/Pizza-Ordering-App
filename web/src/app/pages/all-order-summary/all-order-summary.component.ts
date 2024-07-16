import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/profile/header/header.component';
import { OrderSummaryContentComponent } from '../../component/order-summary/order-summary-content/order-summary-content.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-all-order-summary',
  standalone: true,
  imports: [HeaderComponent, OrderSummaryContentComponent,FooterComponent],
  templateUrl: './all-order-summary.component.html',
  styleUrl: './all-order-summary.component.scss',
})
export class AllOrderSummaryComponent {
  pictureUrl="../../../../assets/images/payment summary page/pizza orders.gif"
}
