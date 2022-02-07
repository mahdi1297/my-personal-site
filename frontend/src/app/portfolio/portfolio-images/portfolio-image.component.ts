import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-imagas',
  templateUrl: './portfolio-image.component.html',
  styleUrls: ['./portfolio-image.component.css'],
})
export class PortfolioImagesComponent {
  @Input() main_image: string;
  @Input() presentation_images: any;
  constructor() {}
}
