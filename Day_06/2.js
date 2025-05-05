// 2 Print the character which is repeated max no of times
// input: 'hello world'
// output : 'L'

let message = 'hello world';
let charCount = {};
for (let ch of message) {
if (charCount[ch]) {
charCount[ch]++;
} else {
charCount[ch] = 1;
}
}

let highestCount = 0;
let frequentChar = '';
for (let key in charCount) {
if (charCount[key] > highestCount) {
highestCount = charCount[key];
frequentChar = key;
}
}
console.log(frequentChar);