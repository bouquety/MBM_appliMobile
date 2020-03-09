import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterCinqPageRoutingModule } from './register-cinq-routing.module';

import { RegisterCinqPage } from './register-cinq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterCinqPageRoutingModule
  ],
  declarations: [RegisterCinqPage]
})
export class RegisterCinqPageModule {}
