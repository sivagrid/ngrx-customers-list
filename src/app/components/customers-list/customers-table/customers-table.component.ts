import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { Customer } from '../../../models/customer.modal';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html'
})
export class CustomersTableComponent implements OnInit {
  @Input() customers: Customer[];
  @Output() delete = new EventEmitter<Customer>();
  constructor() {
  }

  ngOnInit() {
  }

  deleteCustomer(customer: Customer) {
    if(customer && customer.id) {
      if(confirm(`Are you sure want to delete customer ${customer.firstName}`)) {
        this.delete.emit(customer);
      }
    }
  }
}
