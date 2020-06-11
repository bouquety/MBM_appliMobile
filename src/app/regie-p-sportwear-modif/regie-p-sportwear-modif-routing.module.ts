import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiePSportwearModifPage } from './regie-p-sportwear-modif.page';

const routes: Routes = [
  {
    path: '',
    component: RegiePSportwearModifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiePSportwearModifPageRoutingModule {}
