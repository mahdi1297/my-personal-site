import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './services/http.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cookieValue: string = '';
  TOKEN_API_ADDRESS: string = 'user/get-user';

  constructor(private tokenService: TokenService) {
    this.tokenService.checkTokenToRequest();
  }
}
