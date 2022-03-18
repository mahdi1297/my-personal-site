import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ReplaySubject, Subject } from 'rxjs';
import { IUserModel } from '../user.mode';
import { ApiService } from './http.service';

@Injectable({ providedIn: 'root' })
export class TokenService {
  user = new ReplaySubject<IUserModel>();

  cookieValue: string;
  TOKEN_API_ADDRESS: string = 'user/get-user';

  constructor(
    private cookieService: CookieService,
    private apiService: ApiService
  ) {}

  checkTokenToRequest() {
    this.cookieValue = this.cookieService.get('u_t');
    const isExistsCookie = this.cookieService.check('u_t');

    if (isExistsCookie === true) {
      this.apiService
        .post(this.TOKEN_API_ADDRESS, { token: this.cookieValue })
        .subscribe(
          (data: any) => {
            this.user.next(data.result);
            if (data.token) {
              this.cookieValue = data.token;
              this.cookieService.set('u_t', data.token);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
