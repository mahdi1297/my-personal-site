import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

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
          this.portfolio = data.result;
          console.log(data.result);
        },
        (error) => {
          console.log(error);
        }
      );
    });

    // this.apiService.get()
  }
}
