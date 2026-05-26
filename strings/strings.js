
// Including an apostrophe in a string can be done by escaping it with a backslash (\)  
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

//converting a number to a string
const numberAsString = String(242);
console.log(numberAsString); // "242"

//also happens by default when you concatenate a string with a number.

const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); // "Front 242"

//converting a string to a number.

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number


//length of a string
let text = "ABCDCSCDSCCDCCD" ;
let length = text.length;
console.log(length); // 15

let char = text.charAt(0);
console.log(char); // "A"

let code = text.codePointAt(0);
console.log(code); // 65

//The at() method returns the character at a specified index (position) in a string.
const str = "Hello, World!";
let letter = str.at(2); // "l"
console.log(letter); 


let proper = "hello world";
let acc = proper[0];
console.log(acc); // "h"