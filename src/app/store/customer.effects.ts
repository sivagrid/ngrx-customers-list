import { Injectable } from "@angular/core";
import { CustomerService } from "../services/customer.service";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import * as types from './action.types';
import * as customerActions from './customer.actions';

@Injectable({
  providedIn: 'root'
})
export class CustomerEffects {
  constructor(private customerService: CustomerService,
    private actions$: Actions
  ) {}

  @Effect() loadCustomers$: Observable<Action> = this.actions$.pipe(
    ofType<customerActions.loadCustomersAction>(types.LOAD_CUSTOMERS),
    switchMap(() => this.customerService.getCustomers().pipe(
      map(customers => (new customerActions.loadCustomersSuccessAction(customers)))
    ))
  )

  @Effect() deleteCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<customerActions.deleteCustomerAction>(types.DELETE_CUSTOMER),
    switchMap(action => this.customerService.deleteCustomer(action.payload).pipe(
      map(customer => (new customerActions.deleteCustomerSuccessAction(customer.id)))
    ))
  )

  @Effect() updateCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<customerActions.updateCustomerAction>(types.UPDATE_CUSTOMER),
    switchMap(action => this.customerService.updateCustomer(action.payload).pipe(
      map(customer => (new customerActions.updateCustomerSuccessAction(customer)))
    ))
  )
}
