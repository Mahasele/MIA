import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
      {
        path: 'feedback',
        loadChildren: () => import('../feedback/feedback.module').then(m => m.FeedbackPageModule)
      },
      {
        path: 'view-all',
        loadChildren: () => import('../view-all/view-all.module').then(m => m.ViewAllPageModule)
      },
      {
        path: 'request',
        loadChildren: () => import('../request/request.module').then(m => m.RequestPageModule)
      },
      
      {
        path: 'view-requests',
        loadChildren: () => import('../view-requests/view-requests.module').then(m => m.ViewRequestsPageModule)
      },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'blood-requests', // Define the path for 'blood-requests'
    loadChildren: () => import('../blood/blood.module').then(m => m.BloodPageModule)// Specify the component to be rendered for this route
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
