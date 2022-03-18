import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../shared/loading/loading.component';
import { LoadingContainerComponent } from '../shared/loading-container/loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent, LoadingContainerComponent],
  exports: [LoadingComponent, LoadingContainerComponent],
})
export class SharedModule {}
