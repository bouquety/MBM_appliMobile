import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VesteChicProduitPageRoutingModule } from './veste-chic-produit-routing.module';

import { VesteChicProduitPage } from './veste-chic-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VesteChicProduitPageRoutingModule
  ],
  declarations: [VesteChicProduitPage]
})
export class VesteChicProduitPageModule {}
