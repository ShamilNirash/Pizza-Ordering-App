import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import{ FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-welcome-picture',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './welcome-picture.component.html',
  styleUrl: './welcome-picture.component.scss'
})
export class WelcomePictureComponent {
   nextIcon= faCircleArrowRight;
}
