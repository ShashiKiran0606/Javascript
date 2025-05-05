// 1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas'
let str1 = 'sachin';
console.log(str1.split('').reverse().join(''));

// 2.WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'
let str2 = 'This is javascript class';
console.log(str2.split(' ').reverse().join(' '));

// 3. WAP to print the first non-repeated character in a string
//    input:- 'entertainment'
//    output:- r
let Str3 = 'entertainment';
    for (i of Str3){
        if(Str3.indexOf(i)===Str3.lastIndexOf(i)){
            console.log(i);
            break
        }
    }

// 4. WAP to print a string in title case
// 	input:- 'this is javascript class'
//    output:- 'This Is Javascript Class'

let str='this is javascript class';
let output='';
for(let word of str.split(' '))
{
    output+=word.charAt(0).toUpperCase()+word.slice(1)+' ';
}
console.log(output);
// let str4 =  'this is javascript class';
// let newStr = str4.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// console.log(newStr); 

// 5. WAP to find longest word in a sentence
// 	input:- 'this is javascript class'
//     output:- javascript

let str5='this is javascript class';
let output5='';
let len=0;
for(let word of str5.split(' '))
{
    if(word.length>len)
    {
        output5=word;
        len=word.length;
    }
}
console.log(output5);
// str5 =  'this is javascript class';
//   let words = str5.split(' ');
//   let longest = words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
// console.log(longest);


// 6. WAP to print Account number
//    input:- '12345678987'
//    output:- '12*******87'
let Num = '12345678987';
let middle = Num.slice(3, -2);
let newMiddle = "*".repeat(middle.length);
console.log(Num.slice(0, 2) + newMiddle + Num.slice(-2));

// 7. WAP to print Credit-card number
//    input:- '1111222233334444'
//    output:- '1111-2222-3333-4444'

let cardNum = "1111222233334444";
let output7 = cardNum.slice(0, 4) + '-' + cardNum.slice(4, 8) + '-' + cardNum.slice(8, 12) + '-' + cardNum.slice(12);
console.log(output7);

// let cardNum = "1111222233334444";
// console.log(cardNum.match(/.{1,4}/g).join('-'));

// 8. WAP to check if 2 strings are anagram or not
// 	'listen' - 'silent'    anagram(every char of str1 should be there in str2)
let given1 = "listen";
let given2 = "silent";
console.log(given1.split('').sort().join('') === given2.split('').sort().join('') ? "Given strings are anagram" : "Given strings are not anagram");
// // let given1 = "listen";
// // let given2 = "silent";
// // let sorting =(word)=> word.split('').sort().join('');
// // if(sorting(given1)===sorting(given2) && given1.length === given2.length){
// //     console.log("Given strings are anagram")
// // } else {
// //     console.log("Given strings are not anagram")
// }
	
// 9. WAP to remove special character from a string
//    input:- 'hello@#hi&'
//    output:- 'hellohi'
// let nonSpecial = (input)=>{
//     console.log(input.replace(/[^a-zA-Z0-9]/g,''));
// }
// nonSpecial('hello@$%&')

console.log('hello@$%&'.replace(/[^a-zA-Z0-9]/g, ''));

   
// 10. WAP to move all the special characters to the end of the string
// 	input:- 'hello@#hi&'
//    output:- 'hellohi@#&'

let str10='hello@#hi&';
let Char = str10.replace(/[^a-zA-Z0-9]/g,'');
let Symb = str10.replace(/[a-zA-Z0-9]/g,'');
console.log(Char+Symb);

