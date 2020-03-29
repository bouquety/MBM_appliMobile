import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementValidePageRoutingModule } from './paiement-valide-routing.module';

import { PaiementValidePage } from './paiement-valide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementValidePageRoutingModule
  ],
  declarations: [PaiementValidePage]
})
export class PaiementValidePageModule {}
