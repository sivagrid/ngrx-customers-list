import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Customer } from '../models/customer.modal';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private baseUrl = 'http://localhost:3000/customers'
  constructor(private http: HttpClient) {}

  /**
   * Get customers list
   */
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl)
      .pipe(
        tap(customers => {return customers}),
        catchError(this.handleError('getCustomers', []))
      );
  }

  /**
   * getCustomer
   */
  getCustomer(id: number): Observable<Customer> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Customer>(url)
      .pipe(
        tap(customer => console.log('fetched customer')),
        catchError(this.handleError<Customer>(`getHero id=${id}`))
      )
  }

  /**
   * addCustomer
   */
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, customer, httpOptions)
      .pipe(
        tap(customer => console.log('successfully added customer')),
        catchError(this.handleError<Customer>('addCustomer'))
      );
  }

  /**
   * updateCustomer
   */
  updateCustomer(customer: Customer): Observable<any> {
    const url = `${this.baseUrl}/${customer.id}`;
    return this.http.put(url, customer, httpOptions)
      .pipe(
        tap(_ => console.log(`updated customer: id=${customer.id}`)),
        catchError(this.handleError<Customer>('addCustomer'))
      );
  }

  /**
   * deleteCustomer
   */
  deleteCustomer(customer: Customer | number): Observable<Customer> {
    const id = typeof customer == 'number' ? customer : customer.id;
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Customer>(url, httpOptions)
      .pipe(
        tap(customer => console.log(`deleted customer id=${id}`)),
        catchError(this.handleError<Customer>('deleteCustomer'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
