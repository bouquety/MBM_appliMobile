import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantalonsChicPage } from './pantalons-chic.page';

const routes: Routes = [
  {
    path: '',
    component: PantalonsChicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantalonsChicPageRoutingModule {}
