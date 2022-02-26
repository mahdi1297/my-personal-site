import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-detail-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit {
  @Input() title: any | undefined;
  @Input() writer: any | undefined;
  @Input() createdAt: any | undefined;
  @Input() main_image: any | undefined;

  imageUrl: string = environment.api_image_url;

  constructor() {}

  ngOnInit(): void {}
}
