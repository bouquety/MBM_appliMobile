import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCinqPage } from './register-cinq.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterCinqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterCinqPageRoutingModule {}
