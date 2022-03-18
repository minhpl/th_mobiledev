import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessPage } from './business.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessPage,
    children: [
      {
        path: 'skills',
        loadChildren: () => import('../skills/skills.module').then( m => m.SkillsPageModule)
      },
      {
        path: 'tools',
        loadChildren: () => import('../tools/tools.module').then( m => m.ToolsPageModule)
      },
    ]
  },
      {
        path: '',
        redirectTo: 'business/skills',
        pathMatch: 'full'
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessPageRoutingModule {}
