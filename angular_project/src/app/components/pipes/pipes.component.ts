import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { MySortPipe } from '../../pipes/my-sort.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { RomanPipe } from '../../pipes/roman.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    MySortPipe,
    OrdinalPipe,
    RomanPipe,
    AgePipe,
    SalutationPipe,
    SearchPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  userName: string = 'Rohit Sharma';
  salary: number = 5000;
  today : Date = new Date();
  user: object ={ name : 'Shashi', age : 25, address: 'Knoxville'}
  numArr: number[] = [10,20,30,40]
  msg: string = '';
  msg2: string = '';
  // num: number = 21;

  arr = [10, 50, 30, 40, 20]
  arr2 = [10, 50, 30, 40, 20]

  num:number=0;
  romanInput:number=0;
  birthDate: Date= new Date();
  employees = [

    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },

    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },

    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },

    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },

    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }

  ];
  searchTxt:string='';
}
