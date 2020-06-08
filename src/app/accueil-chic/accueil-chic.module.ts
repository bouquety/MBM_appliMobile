import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilChicPageRoutingModule } from './accueil-chic-routing.module';

import { AccueilChicPage } from './accueil-chic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilChicPageRoutingModule
  ],
  declarations: [AccueilChicPage]
})
export class AccueilChicPageModule {}
