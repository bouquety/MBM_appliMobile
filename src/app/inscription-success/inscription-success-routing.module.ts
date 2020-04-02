import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionSuccessPage } from './inscription-success.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionSuccessPageRoutingModule {}
