import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterContentInit {
  @Input() slug: string;
  @Input() writer: string;

  pageAddress: string;
  isCoppied: boolean = false;

  constructor() {}

  ngOnInit() {}

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
