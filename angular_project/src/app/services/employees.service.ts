import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  getAllEmployees(): any {
    return this.employees;
  }
  MaleEmployees():any{
    return this.employees.filter((employee) => employee.gender === "male");
  }
  FemaleEmployees():any{
    return this.employees.filter((employee) => employee.gender === "female");
    }
}
