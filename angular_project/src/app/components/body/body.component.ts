import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UsersComponent } from '../users/users.component';
import { ProductComponent } from '../product/product.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { Demo1Component } from '../demo1/demo1.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { EmployeeCRUDparentComponent } from '../employee-crudparent/employee-crudparent.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { EmployeesComponent } from '../employees/employees.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { HttpUserComponent } from '../http-user/http-user.component';
import { HttpDemo2Component } from '../http-demo2/http-demo2.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent
    // DirectivesComponent
    // UsersComponent
    // ProductComponent
    // MyModalComponent
    // Demo1Component
    // EmployeeCRUDComponent
    // PipesComponent
    // ParentComponent
    // EmployeeCRUDparentComponent
    // Math1Component,
    // Math2Component,
    // EmployeesComponent,
    // HttpDemo1Component,
    // HttpUserComponent,
    HttpDemo2Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
