import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import BlogService from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-items',
  templateUrl: './items.component.html',
  styleUrls: ['/items.component.css'],
})
export class ItemsComponent implements OnInit {
  blogs: any = [];
  pageNumber: number = 1;
  blogsLength: number = 0;
  imageUrl: string = environment.api_image_url;

  constructor(private blogServiec: BlogService) {
    this.readEmployee(this.pageNumber);
  }

  ngOnInit() {}

  nextPageBtnHandler() {
    if (this.blogs.result.length >= this.blogsLength) {
      return;
    }
    this.blogs = [];

    this.pageNumber = this.pageNumber + 1;
    this.readEmployee(this.pageNumber);
  }

  prevPageBtnHandler() {
    if (this.pageNumber < 2) {
      return;
    }

    this.blogs = [];
    this.pageNumber = this.pageNumber - 1;
    this.readEmployee(this.pageNumber);
  }

  readEmployee(pageNumber: number) {
    this.blogs = this.blogServiec.getBlogList(pageNumber);

    console.log(this.blogs?.result);

  
  }
}
