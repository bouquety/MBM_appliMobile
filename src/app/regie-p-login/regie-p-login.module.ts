import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiePLoginPageRoutingModule } from './regie-p-login-routing.module';

import { RegiePLoginPage } from './regie-p-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiePLoginPageRoutingModule
  ],
  declarations: [RegiePLoginPage]
})
export class RegiePLoginPageModule {}
