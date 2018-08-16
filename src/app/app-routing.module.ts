import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

const routes: Routes = [
  { path: '', redirectTo:'/customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersListComponent },
  { path: 'customer/:id', component: CustomerDetailComponent },
  { path: '**', redirectTo:'', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
