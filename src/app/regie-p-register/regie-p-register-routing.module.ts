import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiePRegisterPage } from './regie-p-register.page';

const routes: Routes = [
  {
    path: '',
    component: RegiePRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiePRegisterPageRoutingModule {}
