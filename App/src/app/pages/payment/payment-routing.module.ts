import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentPage } from './payment.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentPage,
    // children: [
    //   {
    //     path: 'method',
    //     loadChildren: () => import('../method/method.module').then( m => m.MethodPageModule)
    //   },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPageRoutingModule {}
