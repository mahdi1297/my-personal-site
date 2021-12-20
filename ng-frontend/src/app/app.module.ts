import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeadComponent } from './blog/blog-detail/head/head.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/header/sidebar/sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { CvComponent } from './cv/cv.component';
import { HeroComponent } from './blog/hero/hero.component';
import { ItemsComponent } from './blog/items/items.component';
import { ApiService } from './services/http.service';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { TimeService } from './services/time.service';
import { ContentComponent } from './blog/blog-detail/content/content.component';
import { BlogDetailFooterComponent } from './blog/blog-detail/footer/footer.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BlogComponent,
    CvComponent,
    HeroComponent,
    ItemsComponent,
    BlogDetailComponent,
    LoadingComponent,
    HeadComponent,
    ContentComponent,
    BlogDetailFooterComponent,
    FooterComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    IconsModule,
    HttpClientModule,
  ],
  providers: [ApiService, TimeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
