
import { Action } from '@ngrx/store';
import * as types from './action.types';
import { Customer } from '../models/customer.modal';

export class loadCustomersAction implements Action {
  readonly type = types.LOAD_CUSTOMERS;
}

export class loadCustomersSuccessAction implements Action {
  readonly type = types.LOAD_CUSTOMERS_SUCCESS;
  constructor(public payload: Customer[]) {}
}

export class deleteCustomerAction implements Action {
  readonly type = types.DELETE_CUSTOMER;
  constructor(public payload: number) {}
}

export class deleteCustomerSuccessAction implements Action {
  readonly type = types.DELETE_CUSTOMER_SUCCESS;

  constructor(public payload: number) {}
}

export class loadCustomerAction implements Action {
  readonly type = types.LOAD_CUSTOMER;
  constructor(public payload: Customer) {}
}

export class loadCustomerSuccessAction implements Action {
  readonly type = types.LOAD_CUSTOMER_SUCCESS;

  constructor(public payload: Customer) {}
}

export class updateCustomerAction implements Action {
  readonly type = types.UPDATE_CUSTOMER;
  constructor(public payload: Customer) {}
}

export class updateCustomerSuccessAction implements Action {
  readonly type = types.UPDATE_CUSTOMER_SUCCESS;

  constructor(public payload: Customer) {}
}


export type Actions =
loadCustomersAction |
loadCustomersSuccessAction |
deleteCustomerAction |
deleteCustomerSuccessAction |
updateCustomerAction |
updateCustomerSuccessAction |
loadCustomerAction |
loadCustomerSuccessAction;
