import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'contact-us', component:ContactUsComponent},
  {path:'about', component:AboutComponent},
  {path:'menu', component:MenuComponent}
];
