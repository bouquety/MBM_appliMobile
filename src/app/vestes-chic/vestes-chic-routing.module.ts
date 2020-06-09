import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VestesChicPage } from './vestes-chic.page';

const routes: Routes = [
  {
    path: '',
    component: VestesChicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VestesChicPageRoutingModule {}
