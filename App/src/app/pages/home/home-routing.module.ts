import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'home/discover',
        pathMatch: 'full'
      },
      {
        path: 'branch',
        loadChildren:() => import('../branch/branch.module').then( m => m.BranchPageModule)
      },
      {
        path: 'search',
        loadChildren:() => import('../search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'search/:id',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}


