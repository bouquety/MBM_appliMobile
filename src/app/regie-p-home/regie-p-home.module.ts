import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiePHomePageRoutingModule } from './regie-p-home-routing.module';

import { RegiePHomePage } from './regie-p-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiePHomePageRoutingModule
  ],
  declarations: [RegiePHomePage]
})
export class RegiePHomePageModule {}
