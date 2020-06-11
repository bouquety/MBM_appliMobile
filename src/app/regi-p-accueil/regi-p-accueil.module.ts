import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiPAccueilPageRoutingModule } from './regi-p-accueil-routing.module';

import { RegiPAccueilPage } from './regi-p-accueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiPAccueilPageRoutingModule
  ],
  declarations: [RegiPAccueilPage]
})
export class RegiPAccueilPageModule {}
