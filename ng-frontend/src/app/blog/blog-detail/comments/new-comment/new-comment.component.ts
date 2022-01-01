import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css'],
})
export class NewCommentComponent implements OnInit {
  isCalled: boolean = false;
  openModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
