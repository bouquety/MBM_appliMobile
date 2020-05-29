import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiePRegisterdeuxPageRoutingModule } from './regie-p-registerdeux-routing.module';

import { RegiePRegisterdeuxPage } from './regie-p-registerdeux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiePRegisterdeuxPageRoutingModule
  ],
  declarations: [RegiePRegisterdeuxPage]
})
export class RegiePRegisterdeuxPageModule {}
