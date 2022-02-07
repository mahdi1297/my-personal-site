import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-content',
  templateUrl: './portfolio-content.component.html',
  styleUrls: ['./portfolio-content.component.css'],
})
export class PortfolioContentComponent implements OnInit {
  @Input() title: string;
  @Input() link: string;
  @Input() description: string;
  @Input() technologies: any;
  technology_items: any = [];
  constructor() {}

  ngOnInit() {
    let items = JSON.parse(this.technologies);
    items.forEach((element: any) => {
      this.technology_items.push(element);
    });
  }
}
