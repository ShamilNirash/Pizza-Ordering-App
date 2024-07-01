import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  isDisplay!: boolean;
  constructor(private loadingService: LoadingService) {
    this.loadingService.displayLoading().subscribe(isLoading => {
      this.isDisplay = isLoading;
    });
  }
}
