import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'cv', component: CvComponent },
  { path: 'blog/:slug', component: BlogDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
