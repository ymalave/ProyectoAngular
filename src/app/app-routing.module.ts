import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ReadEmployeesComponent } from './components/read-employees/read-employees.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'add-employee'},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path:'read-employees', component: ReadEmployeesComponent},
  {path: 'update-employee', component: UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
