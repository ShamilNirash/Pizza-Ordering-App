import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
{path:'sign-in', component:SigninComponent},
{path:'sign-up',component:SignupComponent}
];
