import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiepSportwearPageRoutingModule } from './regiep-sportwear-routing.module';

import { RegiepSportwearPage } from './regiep-sportwear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiepSportwearPageRoutingModule
  ],
  declarations: [RegiepSportwearPage]
})
export class RegiepSportwearPageModule {}
