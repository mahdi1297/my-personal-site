import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { IconsModule } from './icons/icons.module';

import { TimeService } from './services/time.service';
import { ApiService } from './services/http.service';

import { HeadComponent } from './blog/blog-detail/head/head.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/header/sidebar/sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { CvComponent } from './cv/cv.component';
import { HeroComponent } from './blog/hero/hero.component';
import { ItemsComponent } from './blog/items/items.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { ContentComponent } from './blog/blog-detail/content/content.component';
import { BlogDetailFooterComponent } from './blog/blog-detail/footer/footer.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegisterComponent } from './auth/register/register.component';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    SidebarComponent,
    CvComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    IconsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService, TimeService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
