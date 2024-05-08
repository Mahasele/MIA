import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Requests2PageRoutingModule } from './requests2-routing.module';

import { Requests2Page } from './requests2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Requests2PageRoutingModule
  ],
  declarations: [Requests2Page]
})
export class Requests2PageModule {}
