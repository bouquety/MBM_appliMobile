import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiePSportwearPageRoutingModule } from './regie-p-sportwear-routing.module';

import { RegiePSportwearPage } from './regie-p-sportwear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiePSportwearPageRoutingModule
  ],
  declarations: [RegiePSportwearPage]
})
export class RegiePSportwearPageModule {}
