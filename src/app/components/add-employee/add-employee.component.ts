import { Component } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeForm: FormGroup;

  constructor(public Formulario:FormBuilder) {
    this.employeeForm = this.Formulario.group({
      name: [''],
      email: ['']
    });
  }

    sendInfo(): any {
      console.log('Lograndolo');
      console.log(this.employeeForm.value);
    }
}
