import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { OrderSummaryContentComponent } from '../../component/order-summary/order-summary-content/order-summary-content.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, OrderSummaryContentComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
})
export class OrderSummaryComponent {}
