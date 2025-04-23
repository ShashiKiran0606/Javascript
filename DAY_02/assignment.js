//write a program, using prompt() ask user to enter 2 numbers, display addition result
let num1 = prompt('Please Enter a number1' );
let num2 = prompt('Please Enter a number2' );
num1 = parseInt(num1);
num2 = parseInt(num2);
let sum = num1 + num2
alert("The sum is: " + sum);


/*
//console.log(`Addition of ${num1} and ${num2} is ${num1+num2}`);


let a = 10;
let b = 20;

console.log(`Addition of ${a} and ${b} is ${a+b}`); // ES-6 
console.log('Multiplication of '+ a + ' and '+b+' is '+(a*b)); // string concat

<script>
    alert('Hello,Good Morning!!');


    let userConfirmed = confirm('Are you sure to delete the record');
    console.log(userConfirmed);

    let name = prompt('Please Enter Your name');
    console.log(`Your name is ${name}`)
</script>
*/

//window.alert(`Addition of ${a} and ${b} is ${a+b}`); // this statement only works in browser, not in nodejs