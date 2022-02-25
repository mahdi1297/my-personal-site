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
  @Input() tokenData!: any;

  GET_COMMENTS_URL = 'comment/list';

  isOpen: boolean = false;
  id: any;
  commentLength: number = 0;
  commentsData: any = [];
  commentPageNumber: number = 1;

  constructor(
    private apiServeice: ApiService,
    private timeService: TimeService
  ) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.apiServeice
      .post(this.GET_COMMENTS_URL, {
        parentId: this._id,
        pageNumber: this.commentPageNumber,
      })
      .subscribe(
        (data: any) => {
          if (data) {
            data.result.forEach((item: any) => {
              item.createdAt = this.timeService.toShamsi(item.createdAt);
              this.commentsData.push(item);
            });
            this.commentLength = data.count;
          }
        },
        (error) => {}
      );
  }

  getMoreComments() {
    this.commentPageNumber += 1;
    this.getComments();
  }

  openModal(id: string) {
    this.isOpen = false;
    this.id = id;
    this.isOpen = !this.isOpen;
  }

  commentModalCloserHandler(event: any) {
    this.isOpen = false;
  }
}
