import { Component } from '@angular/core';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';


@Component({
  selector: 'app-employee-crudparent',
  imports: [EmployeeTableComponent, EmployeeAddComponent],
  templateUrl: './employee-crudparent.component.html',
  styleUrl: './employee-crudparent.component.css'
})
export class EmployeeCRUDparentComponent {
  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];
  
  deleteEmployeeData(index: number){
    this.employees.splice(index,1);
  }

  addEmployeeData(newEmployee:any){
    this.employees.push(newEmployee);
  }

}
