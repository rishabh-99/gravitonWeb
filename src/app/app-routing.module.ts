import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankStatsComponent } from './bank-stats/bank-stats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultsComponent } from './defaults/defaults.component';
import { LoginComponent } from './login/login.component';
import { MetadataComponent } from './metadata/metadata.component';
import { NetCashComponent } from './net-cash/net-cash.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SummaryComponent } from './summary/summary.component';
import { TableComponent } from './table/table.component';

// const routes: Routes = [];

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'table', component: TableComponent},
  { path: 'bankStats', component: BankStatsComponent},
  { path: 'metadata', component: MetadataComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'netcash', component: NetCashComponent},
  { path: 'defaults', component: DefaultsComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
