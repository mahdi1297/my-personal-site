import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioCompoent } from './portfolio.component';

const portfolioRoutes: Routes = [
  { path: ':slug', component: PortfolioCompoent },
];

@NgModule({
  imports: [RouterModule.forChild(portfolioRoutes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
