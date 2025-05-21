import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  

  // userName: string = 'Rohit Sharma';
   userName : string = 'Rohit Sharma';
  img_url: string = 'https://pbs.twimg.com/profile_images/1810258334651494400/Gc3PZMyU_400x400.jpg';
  
  myColSpanVal: number=2;

  flag: boolean = false;

  f1(){
    alert("I'm f1 function");
  }

  num1:number=1;
  num2:number=1;


  addResult:number=0;
  addition(val1: string | number,val2: string | number){
    this.addResult=+val1 + +val2;
  }


  show: boolean=true;
  toggle()
  {
    this.show=!this.show;
  }

  txt:string='';
  state_selected:string='nothing';

  operator:string='';
  res:number=0;

  perform(val1: string | number,val2: string | number){
    this.res=eval(+val1 +this.operator+ +val2)
  }

  flag1: string="password";
  switch(){
    this.flag1=this.flag1==="password"? "text":"password";
  }

  counter: number=0;

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  reset(){
    this.counter=0;
  }


  bgcolor :string ="white";
  textcolor:string="black"
  theme()
  {
    this.bgcolor=this.bgcolor==="white"? "black":"white";
    this.textcolor=this.textcolor==="white"? "black":"white";
  }

}
