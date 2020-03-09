import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterDeuxPageRoutingModule } from './register-deux-routing.module';

import { RegisterDeuxPage } from './register-deux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterDeuxPageRoutingModule
  ],
  declarations: [RegisterDeuxPage]
})
export class RegisterDeuxPageModule {}
