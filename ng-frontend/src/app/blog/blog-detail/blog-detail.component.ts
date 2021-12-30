import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/http.service';
import { TimeService } from 'src/app/services/time.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  blogDetail: any = {};
  tokenSub: Subscription = new Subscription();
  tokenData: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private timeService: TimeService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.tokenSub = this.tokenService.user.subscribe((data) => {
      this.tokenData = data;
    });

    this.route.params.subscribe((param) => {
      if (!param.slug) {
        return;
      }
      this.apiService
        .post('blog/get-by-slug', { slug: param.slug })
        .subscribe((data: any) => {
          data.result.createdAt = this.timeService.toShamsi(
            data.result.createdAt
          );
          data.result.tags = JSON.parse(data.result.tags[0]);
          this.blogDetail = data;
        });
    });
  }

  ngOnDestroy() {
    this.blogDetail = {};
    this.tokenData = {};
    this.tokenSub.unsubscribe();
  }
}
