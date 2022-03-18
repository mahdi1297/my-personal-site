import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../services/http.service';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioCompoent implements OnInit {
  GET_PORTFOLIO_URL = 'portfolio';
  portfolio: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private metaTagService: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.getPortfolio();
  }

  getPortfolio() {
    this.route.params.subscribe((param: Params) => {
      if (!param.slug) {
        return;
      }
      this.apiService.get(`portfolio/${param.slug}`).subscribe(
        (data: any) => {
          setTimeout(() => {
            this.portfolio = data.result;
          }, 1200);
          this.titleService.setTitle(`Mahdi Alipoor | ${data.result.title} `);
          this.metaTagService.addTags([
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Mahdi Alipoor' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            // { rel: 'canonical', href: `${window.location.href}` },
            { charset: 'UTF-8' },
            { name: 'theme-color', content: '#46afb2' },
          ]);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
