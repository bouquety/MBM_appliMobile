import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiepSportwearModifPageRoutingModule } from './regiep-sportwear-modif-routing.module';

import { RegiepSportwearModifPage } from './regiep-sportwear-modif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiepSportwearModifPageRoutingModule
  ],
  declarations: [RegiepSportwearModifPage]
})
export class RegiepSportwearModifPageModule {}
