// 5. Shift the characters by the next character
//     input:  'abcxyz'
//     output: 'bcdyza'

// let text = 'abcxyz';
// let shifted = '';
// for (let char of text) {
// if (char === 'z') {
// shifted += 'a';
// } else if (char === 'Z') {
// shifted += 'A';
// } else {
// shifted += String.fromCharCode(char.charCodeAt(0) + 1);
// }
// }
// console.log(shifted);

let arr = [10,15,20];
let arr1 = arr.map((no)=>no + 5)
console.log(arr1);