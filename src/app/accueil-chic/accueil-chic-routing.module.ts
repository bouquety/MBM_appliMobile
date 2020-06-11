import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilChicPage } from './accueil-chic.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilChicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilChicPageRoutingModule {}
