// Swap The case for Each Character in a string 
//     input: 'Hello World'
//     output: 'hELLO wORLD'

let phrase = 'Hello World';
let swappedCase = '';
for (let letter of phrase) {
if (letter === letter.toUpperCase()) {
swappedCase += letter.toLowerCase();
} else {
swappedCase += letter.toUpperCase();
}
}
console.log(swappedCase);

