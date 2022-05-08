import { Component, Input } from '@angular/core';

@Component({
  selector: 'avatar-shared',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarSharedComponent {
  @Input() writer: string;
  @Input() profile?: string;

  constructor() {}
}
