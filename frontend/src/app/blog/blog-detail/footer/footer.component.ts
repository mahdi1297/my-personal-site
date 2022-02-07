import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class BlogDetailFooterComponent implements OnInit {
  @Input() tags!: any;
  @Input() writer!: string;
  @Input() tokenData!: string;

  constructor() {}

  ngOnInit() {}
}
