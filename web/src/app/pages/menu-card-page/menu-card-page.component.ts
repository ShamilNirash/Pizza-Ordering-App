import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuCardPageBodyComponent } from '../../component/menu-card-page/menu-card-page-body/menu-card-page-body.component';

@Component({
  selector: 'app-menu-card-page',
  standalone: true,
  imports: [NavbarComponent,MenuCardPageBodyComponent],
  templateUrl: './menu-card-page.component.html',
  styleUrl: './menu-card-page.component.scss'
})
export class MenuCardPageComponent  {
 
}
