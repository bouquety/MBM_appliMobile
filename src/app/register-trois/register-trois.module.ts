import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterTroisPageRoutingModule } from './register-trois-routing.module';

import { RegisterTroisPage } from './register-trois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterTroisPageRoutingModule
  ],
  declarations: [RegisterTroisPage]
})
export class RegisterTroisPageModule {}
