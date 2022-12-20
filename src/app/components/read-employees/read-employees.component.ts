import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-read-employees',
  templateUrl: './read-employees.component.html',
  styleUrls: ['./read-employees.component.css']
})
export class ReadEmployeesComponent{
  Employee:any;

  constructor(private service: CrudService) {

  }

  ngOnInit(): void {
    this.service.getEmployee().subscribe(result=>{
      console.log(result);
      this.Employee = result;
    });
    
  }

  DeleteEmployee(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Esta seguro que desea eliminar el empleado?")){
      this.service.DeleteEmployee(id).subscribe((result)=>{
        this.Employee.splice(iControl,1);
      });
    }
  }
}
