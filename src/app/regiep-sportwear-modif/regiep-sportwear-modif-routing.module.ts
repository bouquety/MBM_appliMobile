import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiepSportwearModifPage } from './regiep-sportwear-modif.page';

const routes: Routes = [
  {
    path: '',
    component: RegiepSportwearModifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiepSportwearModifPageRoutingModule {}
