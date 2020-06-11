import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiePSportwearPage } from './regie-p-sportwear.page';

const routes: Routes = [
  {
    path: '',
    component: RegiePSportwearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiePSportwearPageRoutingModule {}
