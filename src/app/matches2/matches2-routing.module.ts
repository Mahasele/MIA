import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Matches2Page } from './matches2.page';

const routes: Routes = [
  {
    path: '',
    component: Matches2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Matches2PageRoutingModule {}
