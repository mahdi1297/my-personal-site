import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  commentSub: Subscription;
  constructor() {}

  ngOnInit() {}
}
