import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiePSportwearModifPageRoutingModule } from './regie-p-sportwear-modif-routing.module';

import { RegiePSportwearModifPage } from './regie-p-sportwear-modif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiePSportwearModifPageRoutingModule
  ],
  declarations: [RegiePSportwearModifPage]
})
export class RegiePSportwearModifPageModule {}
