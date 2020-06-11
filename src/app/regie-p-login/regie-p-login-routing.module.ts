import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiePLoginPage } from './regie-p-login.page';

const routes: Routes = [
  {
    path: '',
    component: RegiePLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiePLoginPageRoutingModule {}
