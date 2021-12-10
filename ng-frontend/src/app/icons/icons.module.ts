import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { X, Menu } from 'angular-feather/icons';

const icons = {
  Menu,
  X,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
