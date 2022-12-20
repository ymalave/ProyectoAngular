import { Component } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeForm: FormGroup;

  constructor(public Formulario:FormBuilder,
    private crudService:CrudService,
    private router:Router) {
    this.employeeForm = this.Formulario.group({
      Dni: [''],
      name: [''],
      email: ['']
    });
  }

    sendInfo(): any {
      console.log('Lograndolo');
      console.log(this.employeeForm.value);
      this.crudService.AddEmployee(this.employeeForm.value).subscribe();

      this.router.navigateByUrl('/read-employees');
    }
}
