import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  PreloadingStrategy,
  PreloadAllModules,
} from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog.component';

const blogRoutes: Routes = [
  { path: '', component: BlogComponent },
  { path: ':slug', component: BlogDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
