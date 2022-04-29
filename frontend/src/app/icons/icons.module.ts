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
  Activity,
  Edit,
  CornerUpLeft,
  Tag,
  X,
  Search,
} from 'angular-feather/icons';

const icons = {
  ChevronRight,
  ChevronLeft,
  CornerUpLeft,
  Activity,
  PenTool,
  Edit,
  Tag,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  Link,
  X,
  Search,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
