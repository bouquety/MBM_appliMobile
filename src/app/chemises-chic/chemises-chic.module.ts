import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChemisesChicPageRoutingModule } from './chemises-chic-routing.module';

import { ChemisesChicPage } from './chemises-chic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChemisesChicPageRoutingModule
  ],
  declarations: [ChemisesChicPage]
})
export class ChemisesChicPageModule {}
