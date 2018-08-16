import * as customerActions from './customer.actions';
import * as types from './action.types';
import { Customer } from '../models/customer';

export function CustomerReducer(state = [], action: customerActions.Actions) {
  switch(action.type) {
    case types.LOAD_CUSTOMERS_SUCCESS: {
      return action.payload;
    }
    case types.DELETE_CUSTOMER_SUCCESS: {
      return state.filter(customer => customer.id !== action.payload)
    }
    case types.UPDATE_CUSTOMER_SUCCESS: {
      return [...state, action.payload]
    }
    default:
      return state;
  }
}
