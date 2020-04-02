import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionSuccessPageRoutingModule } from './inscription-success-routing.module';

import { InscriptionSuccessPage } from './inscription-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionSuccessPageRoutingModule
  ],
  declarations: [InscriptionSuccessPage]
})
export class InscriptionSuccessPageModule {}
