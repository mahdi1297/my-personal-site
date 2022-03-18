import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { IconsModule } from './icons/icons.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/header/sidebar/sidebar.component';
import { CvComponent } from './cv/cv.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared-module/shared.module';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CvComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    IconsModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 30000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
