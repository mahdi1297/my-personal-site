import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/http.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-blog-comments-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class BlogListComponent implements OnInit {
  @Input() _id!: any;

  GET_COMMENTS_URL = 'comment/list';
  commentLength: any;
  commentsData: any;

  constructor(
    private apiServeice: ApiService,
    private timeService: TimeService
  ) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.apiServeice
      .post(this.GET_COMMENTS_URL, { parentId: this._id })
      .subscribe(
        (data: any) => {
          if (data) {
            data.result.forEach((item: any) => {
              item.createdAt = this.timeService.toShamsi(item.createdAt);
            });
            this.commentsData = data.result;
            this.commentLength = data.count;
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
