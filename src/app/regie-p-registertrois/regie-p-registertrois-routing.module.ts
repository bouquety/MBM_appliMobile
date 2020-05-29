import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiePRegistertroisPage } from './regie-p-registertrois.page';

const routes: Routes = [
  {
    path: '',
    component: RegiePRegistertroisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiePRegistertroisPageRoutingModule {}
