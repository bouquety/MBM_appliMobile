import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VestesChicPageRoutingModule } from './vestes-chic-routing.module';

import { VestesChicPage } from './vestes-chic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VestesChicPageRoutingModule
  ],
  declarations: [VestesChicPage]
})
export class VestesChicPageModule {}
