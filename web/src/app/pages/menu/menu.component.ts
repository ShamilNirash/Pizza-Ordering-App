import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CoverPhotoSectionComponent } from '../../shared/cover-photo-section/cover-photo-section.component';
import { MenuBodyComponent } from '../../component/menu/menu-body/menu-body.component';
import { MenuCartContentComponent } from '../../component/menu-cart/menu-cart-content/menu-cart-content.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CoverPhotoSectionComponent,
    MenuBodyComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  sectionDetails = {
    imgUrl: "url('../../../../assets/images/MenuSection/coverPhoto.jpg')",
    h1Name: 'Our Menu',
    h3Name: 'Home / Our Menu',
  };
}
