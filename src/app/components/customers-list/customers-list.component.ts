import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../models/customer';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app.state';
import * as CustomerActions from '../../store/customer.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private store: Store<AppState>) {
    this.customers$ = this.store.select(state =>  state.customers);
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.store.dispatch(new CustomerActions.loadCustomersAction());
  }

  deleteCustomer(customer: Customer): void {
    this.store.dispatch(new CustomerActions.deleteCustomerAction(customer.id));
  }
}
