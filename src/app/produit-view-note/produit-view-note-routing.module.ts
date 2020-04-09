import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitViewNotePage } from './produit-view-note.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitViewNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitViewNotePageRoutingModule {}
