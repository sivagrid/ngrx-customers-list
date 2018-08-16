import * as customerActions from './customer.actions';
import * as types from './action.types';
import { AppState } from '../models/app.state';

export const initialState: AppState = {
  customers: []
}

export function CustomerReducer(state = initialState, action: customerActions.Actions):AppState {
  switch(action.type) {
    case types.LOAD_CUSTOMERS_SUCCESS: {
      return {... state, customers: action.payload };
    }
    case types.DELETE_CUSTOMER_SUCCESS: {
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
    }
    case types.UPDATE_CUSTOMER_SUCCESS: {
      const updatedCustomers = state.customers.map(customer => customer.id === action.payload.id ? action.payload : customer );
      return {...state, customers: updatedCustomers}
    }
    default:
      return state;
  }
}
