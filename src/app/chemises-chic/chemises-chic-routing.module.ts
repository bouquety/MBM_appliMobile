import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemisesChicPage } from './chemises-chic.page';

const routes: Routes = [
  {
    path: '',
    component: ChemisesChicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemisesChicPageRoutingModule {}
