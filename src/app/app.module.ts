import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';

import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { AppRouterModule } from './app-routing.module';
import { CustomerReducer } from './store/customer.reducer';
import { CustomerEffects } from './store/customer.effects';
import { CustomersTableComponent } from './components/customers-list/customers-table/customers-table.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerDetailComponent,
    CustomersTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouterModule,
    StoreModule.forRoot({applicationState: CustomerReducer}),
    EffectsModule.forRoot([CustomerEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
