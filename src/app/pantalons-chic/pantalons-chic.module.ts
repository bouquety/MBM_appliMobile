import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantalonsChicPageRoutingModule } from './pantalons-chic-routing.module';

import { PantalonsChicPage } from './pantalons-chic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantalonsChicPageRoutingModule
  ],
  declarations: [PantalonsChicPage]
})
export class PantalonsChicPageModule {}
