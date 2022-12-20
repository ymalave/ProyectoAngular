import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ReadEmployeesComponent } from './components/read-employees/read-employees.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ReadEmployeesComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
