import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiPAccueilPage } from './regi-p-accueil.page';

const routes: Routes = [
  {
    path: '',
    component: RegiPAccueilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiPAccueilPageRoutingModule {}
