import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MethodPage } from './method.page';

const routes: Routes = [
  {
    path: '',
    component: MethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MethodPageRoutingModule {}
