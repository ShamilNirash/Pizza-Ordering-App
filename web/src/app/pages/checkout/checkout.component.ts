import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CheckoutFormComponent } from '../../component/checkout-form/checkout-form.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NavbarComponent,CheckoutFormComponent,FooterComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
