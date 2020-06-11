import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiePRegistertroisPageRoutingModule } from './regie-p-registertrois-routing.module';

import { RegiePRegistertroisPage } from './regie-p-registertrois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiePRegistertroisPageRoutingModule
  ],
  declarations: [RegiePRegistertroisPage]
})
export class RegiePRegistertroisPageModule {}
