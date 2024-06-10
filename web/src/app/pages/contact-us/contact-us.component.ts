import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ContactUsCoverPhotoComponent } from '../../component/contact-us/contact-us-cover-photo/contact-us-cover-photo.component';
import { ContactUsFormComponent } from '../../component/contact-us/contact-us-form/contact-us-form.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,ContactUsCoverPhotoComponent,ContactUsFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
