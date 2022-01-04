import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { IconsModule } from '../icons/icons.module';
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
  // schemas: [NO_ERRORS_SCHEMA],
  exports: [BlogComponent],
  bootstrap: [BlogComponent],
})
export class BloGModule {}
