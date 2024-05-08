import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Education2Page } from './education2.page';

const routes: Routes = [
  {
    path: '',
    component: Education2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Education2PageRoutingModule {}
