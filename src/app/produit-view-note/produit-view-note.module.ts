import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitViewNotePageRoutingModule } from './produit-view-note-routing.module';

import { ProduitViewNotePage } from './produit-view-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitViewNotePageRoutingModule
  ],
  declarations: [ProduitViewNotePage]
})
export class ProduitViewNotePageModule {}
