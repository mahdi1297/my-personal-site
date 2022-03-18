import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

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
  imageUrl: string = environment.api_image_url;

  constructor(private apiService: ApiService) {
    this.getPortfolios(this.pageNumber);
  }

  ngOnInit() {}

  async getPortfolios(pageNumber: number) {
    this.apiService.get(`portfolio`).subscribe((data: any) => {
      if (data.result && data.result.length === 0) {
        this.isEnd = true;
      }
      if (data.result && data.result.length !== 0) {
        this.isEnd = false;
      }
      setTimeout(() => {
        this.blogs = data;
      }, 700);
    });
  }
}
