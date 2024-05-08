import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, TestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
