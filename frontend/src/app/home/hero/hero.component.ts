import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, AfterContentInit {
  effectedText: string = '';

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    let i = 0;
    const txt = `من مهدی علی پور هستم،
    برنامه نویس و طراح سایت
    `;

    const speed = 60;

    const typeWriter = (): void => {
      if (i < txt.length) {
        this.effectedText += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    typeWriter();
  }
}
