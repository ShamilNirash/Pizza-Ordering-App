import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { UserAuthService } from '../../../services/user-auth/user-auth.service';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order/order.service';
import { CartService } from '../../../services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-security',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss',
})
export class SecurityComponent {
  nextIcon = faAngleRight;
  constructor(
    private userAuthService: UserAuthService,
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  onClickLogOut() {
    this.userAuthService.deleteCredentials();
    this.router.navigateByUrl('/');
    this.toastr.success('Logout Successfully');
  }
  onClickDelete() {
    this.userAuthService.deleteUser().subscribe({
      next: res => {
        this.cartService.deleteAllUserCart().subscribe();
        this.orderService.deleteAllOrders().subscribe();
        this.userAuthService.deleteCredentials();
        this.router.navigateByUrl("''");
        this.toastr.success('Account Delete Successfully');
      },
      error: err => {
        console.log(err);
        this.toastr.error('Error Occur');
      },
    });
  }
}
