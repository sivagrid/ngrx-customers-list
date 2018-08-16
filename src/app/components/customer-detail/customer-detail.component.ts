import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.modal';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app.state';
import * as CustomerActions from '../../store/customer.actions';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Output() update = new EventEmitter<Customer>();

  private customerId: number;
  public customer: Customer;
  constructor(private route: ActivatedRoute,
    private customerService: CustomerService,
    private store: Store<AppState>,
    private location: Location
  ) { }

  ngOnInit() {
    this.customerId = +this.route.snapshot.paramMap.get('id');
    this.getCustomer();
  }

  getCustomer(): void {
    this.customerService.getCustomer(this.customerId)
      .subscribe(customer => this.customer = customer);
  }

  goBack() {
    this.location.back();
  }

  updateCustomer(cForm: NgForm) {
    if(cForm.valid) {
      this.store.dispatch(new CustomerActions.updateCustomerAction(this.customer));
      this.goBack();
    }
  }

}
