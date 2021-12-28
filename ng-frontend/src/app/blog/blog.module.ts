import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { IconsModule } from '../icons/icons.module';
import { ApiService } from '../services/http.service';
import { TimeService } from '../services/time.service';
import { TokenService } from '../services/token.service';
import { CommentComponent } from '../shared/comment/comment.component';

import { LoadingComponent } from '../shared/loading/loading.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CommentsComponent } from './blog-detail/comments/comments.component';
import { BlogListComponent } from './blog-detail/comments/list/list.component';
import { NewCommentComponent } from './blog-detail/comments/new-comment/new-comment.component';
import { ContentComponent } from './blog-detail/content/content.component';
import { BlogDetailFooterComponent } from './blog-detail/footer/footer.component';
import { HeadComponent } from './blog-detail/head/head.component';
import { BlogRoutingModule } from './blog-routes.module';
import { BlogComponent } from './blog.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeroComponent } from './hero/hero.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    IconsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
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
    CommentsComponent,
    BlogListComponent,
    NewCommentComponent,
    CommentComponent,
  ],
  // providers: [ApiService, TimeService, CookieService, TokenService],
  //   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [BlogComponent],
})
export class BloGModule {}
