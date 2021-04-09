import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { BankStatsComponent } from './bank-stats/bank-stats.component';
import { MaterialAngularSelectModule } from 'material-angular-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    DashboardComponent,
    TableComponent,
    BankStatsComponent
  ],
  imports: [
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    MaterialAngularSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
