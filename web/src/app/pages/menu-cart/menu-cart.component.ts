import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CoverPhotoSectionComponent } from '../../shared/cover-photo-section/cover-photo-section.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MenuCartContentComponent } from '../../component/menu-cart/menu-cart-content/menu-cart-content.component';

@Component({
  selector: 'app-menu-cart',
  standalone: true,
  imports: [NavbarComponent, CoverPhotoSectionComponent,MenuCartContentComponent,FooterComponent],
  templateUrl: './menu-cart.component.html',
  styleUrl: './menu-cart.component.scss',
})
export class MenuCartComponent {
  coverPhotoSectionDetails = {
    imgUrl: "url('../../../../assets/images/MenuCartSection/cover-photo.jpg')",
    h1Name: 'Cart',
    h3Name: 'Home / Cart',
  };
}
