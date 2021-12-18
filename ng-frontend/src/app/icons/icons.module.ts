import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  ChevronRight,
  ChevronLeft,
  PenTool,
  Instagram,
  Linkedin,
  Twitter,
  Link,
  Menu,
  X,
} from 'angular-feather/icons';

const icons = {
  ChevronRight,
  ChevronLeft,
  PenTool,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  Link,
  X,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
