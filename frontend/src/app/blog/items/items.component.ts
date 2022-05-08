import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import BlogService from 'src/app/services/blog.service';

interface ResponseModel {
  status: number;
  message: string;
  result: string[];
  count?: any;
}

@Component({
  selector: 'app-blog-items',
  templateUrl: './items.component.html',
  styleUrls: ['/items.component.css'],
})
export class ItemsComponent implements OnInit {
  blogs: any = [];
  pageNumber: number = 1;
  blogsLength: number;
  imageUrl: string = environment.api_image_url;

  constructor(private blogServiec: BlogService) {}

  ngOnInit() {
    this.readEmployee(this.pageNumber);
  }

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
    this.blogs = this.blogServiec.getBlogList(pageNumber).subscribe(
      (data: ResponseModel) => {
        this.blogsLength = data.count;
        setTimeout(() => {
          this.blogs = data;
        }, 500);
      },
      (error: any) => {
        console.log(error);
        return;
      }
    );
  }
}
