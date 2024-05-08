import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Education2PageRoutingModule } from './education2-routing.module';

import { Education2Page } from './education2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Education2PageRoutingModule
  ],
  declarations: [Education2Page]
})
export class Education2PageModule {}
