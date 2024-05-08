import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Matches2PageRoutingModule } from './matches2-routing.module';

import { Matches2Page } from './matches2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Matches2PageRoutingModule
  ],
  declarations: [Matches2Page]
})
export class Matches2PageModule {}
