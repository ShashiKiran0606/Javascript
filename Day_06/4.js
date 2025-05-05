// Print the Abbreviation for a string
// input: 'Rabindra Nath Tagore'
// output: 'R. N. tagore'

let fullName = 'Rabindra Nath Tagore';
let formattedName = '';
for (let part of fullName.split(' ').slice(0,-1)) 
    {
formattedName += part.charAt(0).toUpperCase() + '. ';
}
formattedName += fullName.split(' ').at(-1).toLowerCase();
console.log(formattedName);