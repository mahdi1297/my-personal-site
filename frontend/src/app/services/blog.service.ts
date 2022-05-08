import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ApiService } from './http.service';

@Injectable({
  providedIn: 'root',
})
class BlogService {
  blogList = new ReplaySubject<any>();

  page: number = 1;

  constructor(private apiService: ApiService) {}

  getBlogList(pageNumber: number) {
    this.getData();
    this.page = pageNumber;
    const data = this.blogList;
    return data;
  }

  getData() {
    this.apiService.get(`blog/list/${this.page}`).subscribe(
      (data: any) => {
        this.blogList.next(data);
      },
      (error: any) => {
        alert('error');
      }
    );
  }
}

export default BlogService;
