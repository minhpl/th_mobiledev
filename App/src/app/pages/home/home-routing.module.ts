import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'branch',
        loadChildren:() => import('../branch/branch.module').then( m => m.BranchPageModule)
      },
      {
        path: 'search',
        loadChildren:() => import('../search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'course',
        loadChildren:() => import('../course/course.module').then( m => m.CoursePageModule)
      },
      {
        path: 'discover',
        loadChildren: () => import('../discover/discover.module').then( m => m.DiscoverPageModule)
      },
    ]
  },
      {
        path: '',
        redirectTo: 'home/discover',
        pathMatch: 'full'
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}


