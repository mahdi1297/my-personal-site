import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/http.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-blog-detail-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() _id!: any;

  commentsData: any;

  GET_COMMENTS_URL = 'comment/list';

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
          }
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
