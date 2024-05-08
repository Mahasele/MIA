import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Requests2Page } from './requests2.page';

const routes: Routes = [
  {
    path: '',
    component: Requests2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Requests2PageRoutingModule {}
