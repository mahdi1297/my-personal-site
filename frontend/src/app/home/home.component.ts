import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private metaTagService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(`Mahdi Alipoor | برنامه نویس و طراح سایت `);
    this.metaTagService.addTags([
      {
        name: 'description',
        content: `من مهدی علی پور، برنامه نویس full stack و طراح سایت و قالب سایت هستم`,
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Mahdi Alipoor' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { charset: 'UTF-8' },
      { name: 'theme-color', content: '#46afb2' },
    ]);
  }
}
