import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/header/sidebar/sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { CvComponent } from './cv/cv.component';
import { HeroComponent } from './blog/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BlogComponent,
    CvComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
