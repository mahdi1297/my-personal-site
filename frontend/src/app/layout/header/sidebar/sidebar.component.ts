import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { routes } from '../header.routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  host: { '[hidden]': 'hidden' },
  styleUrls: ['./sidebar.component.css', './../header.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebarRoutes = routes;
  @Output() closeSidebarHandler = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  closeSidebarClick() {
    //close sidebar
    this.closeSidebarHandler.emit();
  }
}
