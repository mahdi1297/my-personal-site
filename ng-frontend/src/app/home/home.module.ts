import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';
import { IconsModule } from '../icons/icons.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [HomeComponent, HeroComponent],
  exports: [HomeComponent],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
