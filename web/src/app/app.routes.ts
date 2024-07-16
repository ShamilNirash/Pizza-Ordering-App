import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuCardPageComponent } from './pages/menu-card-page/menu-card-page.component';
import { MenuCartComponent } from './pages/menu-cart/menu-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { AuthGuard } from './guard/auth-guard.guard';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';
import { AllOrderSummaryComponent } from './pages/all-order-summary/all-order-summary.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  {
    path: 'menu/:cardId',
    component: MenuCardPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'menu-cart', component: MenuCartComponent, canActivate: [AuthGuard] },
  { path: 'check-out', component: CheckoutComponent, canActivate: [AuthGuard] },
  {
    path: ':orderId/check-out-2',
    component: PaymentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':orderId',
    component: OrderSummaryComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'profile/:orderId',
    component:AllOrderSummaryComponent,
    canActivate:[AuthGuard]
  }
];
