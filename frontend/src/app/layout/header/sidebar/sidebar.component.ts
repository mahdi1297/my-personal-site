import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
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
  @Input() userData: any;

  imageUrl: string = environment.api_image_url;

  constructor() {}

  ngOnInit(): void {}

  closeSidebarClick() {
    //close sidebar
    this.closeSidebarHandler.emit();
  }
}
