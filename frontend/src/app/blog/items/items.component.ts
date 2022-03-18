import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-items',
  templateUrl: './items.component.html',
  styleUrls: ['/items.component.css'],
})
export class ItemsComponent implements OnInit {
  blogs: any = [];
  pageNumber: number = 1;
  isFirst: boolean = true;
  isEnd: boolean = false;

  imageUrl: string = environment.api_image_url;

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.readEmployee(this.pageNumber);
  }

  ngOnInit() {}

  nextPageBtnHandler(event: Event) {
    this.blogs = [];

    this.pageNumber = this.pageNumber + 1;
    this.readEmployee(this.pageNumber);
  }

  prevPageBtnHandler(event: Event) {
    if (this.pageNumber < 2) {
      return;
    }

    this.blogs = [];
    this.pageNumber = this.pageNumber - 1;
    this.readEmployee(this.pageNumber);
  }

  readEmployee(pageNumber: number) {
    this.apiService.get(`blog/list/${pageNumber}`).subscribe((data: any) => {
      if (data.result && data.result.length === 0) {
        this.isEnd = true;
      }
      if (data.result && data.result.length !== 0) this.isEnd = false;
      setTimeout(() => {
        this.blogs = data;
      }, 700);
    });
  }
}
