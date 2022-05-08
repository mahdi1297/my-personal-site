import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ApiService } from './http.service';

@Injectable({
  providedIn: 'root',
})
class BlogService {
  blogList = new ReplaySubject<any>();
  blogLength = new ReplaySubject<number>();

  page: number = 1;

  constructor(private apiService: ApiService) {
    this.getData();
  }

  getBlogList(pageNumber: number) {
    this.page = pageNumber;
    return this.blogList.next();
  }

  getData() {
    this.apiService.get(`blog/list/${this.page}`).subscribe(
      (data: any) => {
        this.blogLength = data.count;

        this.blogList = data;
      },
      (error: any) => {
        alert('error');
      }
    );
  }
}

export default BlogService;
