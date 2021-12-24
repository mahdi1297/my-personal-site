import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { IUserModel } from 'src/app/user.mode';
import { routes } from './header.routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSub: Subscription = new Subscription();
  sidebarStatus: boolean = false;
  headerRoutes = routes;
  userData: any;

  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    this.userSub = this.tokenService.user.subscribe((user) => {
      this.userData = user;
    });
  }

  sidebarOpenHandler() {
    this.sidebarStatus = !this.sidebarStatus;
  }

  sidebarCloser() {
    this.sidebarStatus = false;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
