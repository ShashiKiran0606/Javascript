// 1 Print the occurence of each character in a string
// input: 'entertainment'
// output: { e:3 , n:2 , t: 3 ....}

let text = 'entertainment';
let frequencyMap = {};
for (let letter of text) {
if (frequencyMap[letter]) {
frequencyMap[letter]++;
} else {
frequencyMap[letter] = 1;
}
}
console.log(frequencyMap);


