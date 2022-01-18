import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/http.service';

@Component({
  selector: 'home-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
  blogs: any = [];
  pageNumber: number = 1;
  isFirst: boolean = true;
  isEnd: boolean = false;

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
    this.apiService.get(`portfolio`).subscribe((data: any) => {
      if (data.result && data.result.length === 0) {
        this.isEnd = true;
      }
      if (data.result && data.result.length !== 0) this.isEnd = false;
      this.blogs = data;
    });
  }
}
