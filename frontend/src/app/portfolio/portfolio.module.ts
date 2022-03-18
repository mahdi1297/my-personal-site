import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortfolioRoutingModule } from './portfolio-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';

import { PortfolioCompoent } from './portfolio.component';
import { PortfolioContentComponent } from './portfolio-content/portfolio-content.component';
import { PortfolioImagesComponent } from './portfolio-images/portfolio-image.component';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    IconsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    PortfolioCompoent,
    PortfolioContentComponent,
    PortfolioImagesComponent,
  ],
  exports: [PortfolioCompoent],
  bootstrap: [PortfolioCompoent],
})
export class PortfolioModule {}
