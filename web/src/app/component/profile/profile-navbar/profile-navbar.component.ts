import { Component, EventEmitter, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-profile-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './profile-navbar.component.html',
  styleUrl: './profile-navbar.component.scss',
})
export class ProfileNavbarComponent {
  @Output() clickedBtnName: EventEmitter<string> = new EventEmitter<string>();
  buttonName: string = 'accountInfo';
  onClick(name: string) {
    this.buttonName = name;
    this.clickedBtnName.emit(name);
  }
}
