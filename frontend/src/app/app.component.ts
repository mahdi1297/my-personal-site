import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private tokenService: TokenService,
    private metaTagService: Meta,
    private titleService: Title
  ) {
    this.tokenService.checkTokenToRequest();
  }

  ngOnInit() {
    this.titleService.setTitle(
      `Mahdi Alipoor | برنامه نویس FullStack وب و طراح سایت و قالب سایت `
    );
    this.metaTagService.updateTag({
      name: 'description',
      content:
        'برنامه نویس FullStack وب و طراح سایت و قالب سایت هستم. مهدی علی پور هستم. من ',
    });
    this.metaTagService.addTags([
      {
        name: 'description',
        content:
          'برنامه نویس FullStack وب و طراح سایت و قالب سایت هستم. مهدی علی پور هستم. من ',
      },
      { name: 'author', content: 'Mahdi Alipoor' },
    ]);
  }
}
