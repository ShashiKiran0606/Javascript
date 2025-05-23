import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-table',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs: ['employees'],
  outputs : ['deleteEvent']
})
export class EmployeeTableComponent {
  employees : any;
  faTrash=faTrash;

  deleteEvent = new EventEmitter();

  deleteEmployee(index: number){
     this.deleteEvent.emit(index);
   }
  
}
