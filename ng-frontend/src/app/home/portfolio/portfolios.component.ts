import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfoliosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
