import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementValidePage } from './paiement-valide.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementValidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementValidePageRoutingModule {}
