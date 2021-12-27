import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';

import { LoadingComponent } from '../shared/loading/loading.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ContentComponent } from './blog-detail/content/content.component';
import { BlogDetailFooterComponent } from './blog-detail/footer/footer.component';
import { HeadComponent } from './blog-detail/head/head.component';
import { BlogRoutingModule } from './blog-routes.module';
import { BlogComponent } from './blog.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeroComponent } from './hero/hero.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  imports: [CommonModule, BlogRoutingModule, IconsModule, HttpClientModule],
  declarations: [
    BlogComponent,
    HeroComponent,
    ItemsComponent,
    BlogDetailComponent,
    HeadComponent,
    ContentComponent,
    BlogDetailFooterComponent,
    LoadingComponent,
    CategoriesComponent,
  ],
  //   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [BlogComponent],
})
export class BloGModule {}
