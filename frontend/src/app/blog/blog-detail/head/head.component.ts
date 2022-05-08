import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-detail-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit, AfterContentInit {
  @Input() title: any | undefined;
  @Input() slug: any | undefined;
  @Input() writer: any | undefined;
  @Input() createdAt: any | undefined;
  @Input() main_image: any | undefined;

  pageAddress: string;
  isCoppied: boolean = false;

  imageUrl: string = environment.api_image_url;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.pageAddress = `http://www.mahdialipoor.ir/blog/${this.slug}`;
  }

  clipboardCopyHandler(): void {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(this.pageAddress);

      this.isCoppied = true;
    }
  }
}
