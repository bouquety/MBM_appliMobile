import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitAjoutNotePageRoutingModule } from './produit-ajout-note-routing.module';

import { ProduitAjoutNotePage } from './produit-ajout-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitAjoutNotePageRoutingModule
  ],
  declarations: [ProduitAjoutNotePage]
})
export class ProduitAjoutNotePageModule {}
