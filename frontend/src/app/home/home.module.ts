import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';
import { IconsModule } from '../icons/icons.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PricingComponent } from './pricing/pricing.component';
import { WorksComponent } from './works/works.component';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    HeroComponent,
    PricingComponent,
    WorksComponent,
  ],
  exports: [HomeComponent],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
