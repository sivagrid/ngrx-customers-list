import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../models/customer';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app.state';
import * as CustomerActions from '../../store/customer.actions';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers:Customer[];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getCustomers();
    this.store.select('applicationState')
        .subscribe((state:AppState) => this.customers = state.customers);
  }

  getCustomers() {
    this.store.dispatch(new CustomerActions.loadCustomersAction());
  }

  deleteCustomer(customer: Customer): void {
    this.store.dispatch(new CustomerActions.deleteCustomerAction(customer.id));
  }
}
