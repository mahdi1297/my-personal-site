import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cookieValue: string = '';

  constructor(
    private cookieService: CookieService,
    private apiService: ApiService
  ) {
    this.getUserData();
  }

  getUserData() {
    this.cookieValue = this.cookieService.get('u_t');
    const isExistsCookie = this.cookieService.check('u_s');

    if (isExistsCookie) {
      // this.apiService.post('')
    }
  }
}
