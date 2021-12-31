import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() content!: any;

  contentArray: string[] = [];

  constructor() {
    const parser = new DOMParser();

    const doc = parser.parseFromString(this.content, 'text/html');

    const headingsArray = [].slice.call(
      doc.querySelectorAll('h1, h2, h3, h4, h5, h6')
    );

    headingsArray.forEach((x: any) => {
      this.contentArray.push(x.textContent);

      x.id = x.textContent.toLowerCase().replace(/ /g, '-');
    });
  }

  ngOnInit() {}
}
