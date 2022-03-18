import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/http.service';
import { TimeService } from 'src/app/services/time.service';
import { TokenService } from 'src/app/services/token.service';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  blogDetail: any = {};
  tokenSub: Subscription;
  tokenData: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private timeService: TimeService,
    private tokenService: TokenService,
    private metaTagService: Meta,
    private titleService: Title
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
          this.titleService.setTitle(`Mahdi Alipoor | ${data.result.title} `);
          this.metaTagService.updateTag({
            name: 'description',
            content: `${data.result.description}`,
          });
          this.metaTagService.addTags([
            {
              name: 'description',
              content: `${data.result.description}`,
            },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Mahdi Alipoor' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            // { rel: 'canonical', href: `${window.location.href}` },
            { charset: 'UTF-8' },
            { name: 'theme-color', content: '#46afb2' },
            {
              property: 'og:title',
              content: `Mahdi Alipoor | ${data.result.title} `,
            },
            {
              property: 'og:site_name',
              content: `Mahdi Alipoor`,
            },
            {
              property: 'og:description',
              content: `${data.result.description}`,
            },
            // {
            //   property: 'og:url',
            //   content: `${window.location.href}`,
            // },
            {
              property: 'og:image',
              content: `${environment.api_image_url}${data.result.main_image}`,
            },
          ]);

          setTimeout(() => {
            this.blogDetail = data;
          }, 700);
        });
    });
  }

  ngOnDestroy() {
    this.blogDetail = {};
    this.tokenData = {};
    this.tokenSub.unsubscribe();
  }
}
