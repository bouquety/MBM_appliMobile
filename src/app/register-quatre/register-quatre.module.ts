import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterQuatrePageRoutingModule } from './register-quatre-routing.module';

import { RegisterQuatrePage } from './register-quatre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterQuatrePageRoutingModule
  ],
  declarations: [RegisterQuatrePage]
})
export class RegisterQuatrePageModule {}
