import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterQuatrePage } from './register-quatre.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterQuatrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterQuatrePageRoutingModule {}
