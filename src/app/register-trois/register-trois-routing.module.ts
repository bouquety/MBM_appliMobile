import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterTroisPage } from './register-trois.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterTroisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterTroisPageRoutingModule {}
