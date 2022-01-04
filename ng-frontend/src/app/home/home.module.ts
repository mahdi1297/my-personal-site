import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
  // schemas: [NO_ERRORS_SCHEMA],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
