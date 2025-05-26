import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [FormsModule, 
    CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  filter: string = '';
  employees: any;

  flag : boolean = true;

  toggleView() {
    this.flag = !this.flag;
  }

  constructor(private employeeService: EmployeesService){
  }

  getFilteredEmployees() {
    if(this.filter=="allEmployees"){
    this.employees = this.employeeService.getAllEmployees();
    }
    else if(this.filter=="maleEmployees"){
      this.employees=this.employeeService.MaleEmployees();
    }
    else if(this.filter=="femaleEmployees"){
      this.employees=this.employeeService.FemaleEmployees();
    }
  }

}
