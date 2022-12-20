import { Component } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})

export class UpdateEmployeeComponent {
  employeeForm: FormGroup;
  theID:any;

  constructor(
    Formulario:FormBuilder,
    private ActiveRoute: ActivatedRoute, 
    private crudService: CrudService) 
    {
      //Se obiene el Id del Empleado
      this.theID = this.ActiveRoute.snapshot.paramMap.get('id');//snapshot para capturar datos
      console.log(this.theID);
      //Obtener Datos con el Id del Empleado
      this.crudService.ReadEmployee(this.theID).subscribe(result=>{
        console.log(result);
        this.employeeForm.setValue(
          {
            Dni:result[0]['id'],
            name:result[0]['nombre'],
            email:result[0]['correo']
          }
        )
      })

      this.employeeForm = Formulario.group({
        Dni:[''],
        name:[''],
        email:['']
      });      
    }
    //Enviar Datos para editar
    sendInfo(): any
    {
      console.log(this.theID);
      console.log(this.employeeForm.value);
      this.crudService.UpdateEmployee(this.theID,this.employeeForm.value).subscribe(()=>{});
    }
}
