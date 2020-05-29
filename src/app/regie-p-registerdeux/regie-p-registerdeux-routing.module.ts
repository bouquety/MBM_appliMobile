import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiePRegisterdeuxPage } from './regie-p-registerdeux.page';

const routes: Routes = [
  {
    path: '',
    component: RegiePRegisterdeuxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiePRegisterdeuxPageRoutingModule {}
