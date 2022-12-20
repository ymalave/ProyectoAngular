 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: String='http://localhost/employee/';
  constructor(private clientHttp:HttpClient) { }

  AddEmployee(employeeData: Employee):Observable<any> {
    return this.clientHttp.post(this.API+"?insert=1", employeeData);
  }

  getEmployee()
  {
    return this.clientHttp.get(this.API+"");
  }

  DeleteEmployee(Dni:any):Observable<any>
  {
    return this.clientHttp.get(this.API+"?delete="+Dni);
  }

  ReadEmployee(Dni:any):Observable<any>
  {
    return this.clientHttp.get(this.API+"?search="+Dni);
  }

  UpdateEmployee(Dni: any,employeeData: Employee):Observable<any> {
    return this.clientHttp.post(this.API+"?update="+Dni, employeeData);
  }
}
