import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() content!: any;

  constructor() {}

  ngOnInit(): void {}
}
