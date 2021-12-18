import { Component, OnInit } from '@angular/core';
import { routes } from './header.routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sidebarStatus: boolean = false;
  headerRoutes = routes;
  constructor() {}

  ngOnInit(): void {
   
  }

  sidebarOpenHandler() {
    this.sidebarStatus = !this.sidebarStatus;
  }

  sidebarCloser() {
    this.sidebarStatus = false;
  }
}
