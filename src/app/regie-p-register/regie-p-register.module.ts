import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiePRegisterPageRoutingModule } from './regie-p-register-routing.module';

import { RegiePRegisterPage } from './regie-p-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiePRegisterPageRoutingModule
  ],
  declarations: [RegiePRegisterPage]
})
export class RegiePRegisterPageModule {}
