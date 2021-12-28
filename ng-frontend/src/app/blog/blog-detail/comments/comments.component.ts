import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() _id!: any;

  constructor() {}

  ngOnInit(): void {}
}
