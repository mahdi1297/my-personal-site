import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-detail-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class BlogDetailFooterComponent implements OnInit {
  @Input() tags!: any;
  @Input() writer!: string;
  @Input() tokenData!: string;
  @Input() keyword!: string;

  image_url: string = environment.api_image_url;

  related_posts: any = [];
  related_posts_length: number;

  GET_RELATED_POSTS_URL = 'blog/get-related';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    if (!this.keyword) {
      this.related_posts_length = 0;
      return;
    }
    const dataObj = {
      category: this.keyword,
    };
    this.apiService
      .post(this.GET_RELATED_POSTS_URL, dataObj)
      .subscribe((data: any) => {
        this.related_posts = data.result;
        this.related_posts_length = data.count;
      });
  }
}
