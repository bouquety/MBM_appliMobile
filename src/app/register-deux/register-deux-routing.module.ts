import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterDeuxPage } from './register-deux.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterDeuxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterDeuxPageRoutingModule {}
