
// Including an apostrophe in a string 
// can be done by escaping it with a backslash (\)  
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

//The at() method returns 
// the character at a specified index (position) in a string.

const str = "Hello, World!";
let letter = str.at(2); // "l"
console.log(letter); 


let proper = "hello world";
let acc = proper[0];
console.log(acc); // "h"

//concat() joins two or more strings:

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3); // "Hello World"

//The slice() method extracts a part of a string 
// and returns the extracted part in a new string.

let txt = "Apple, Banana, Kiwi";
let part = txt.slice(7, 13);
console.log(part); // "Banana"

//If you omit the second parameter, 
// the method will slice out the rest of the string: 

let part2 = txt.slice(7);
console.log(part2); // "Banana, Kiwi"

let part3 = txt.slice(-12, -6);
console.log(part3); // "Banana"

let part4 = txt.slice(-12);
console.log(part4); // "Banana, Kiwi"

//The split() method splits a string into an array of substrings, 
// and returns the new array.

let txt2 = "Hello World";
let arr = txt2.split(" ");
console.log(arr); // ["Hello", "World"]

//substr() is similar to slice(). 
// The difference is that the second parameter 
// specifies the length of the extracted part, not the end position.

let str2 = "Apple, Banana, Kiwi";
let arr2 = str2.substr(7,6);
console.log(arr2); // "Banana" 

let arr3 = str2.substr(7);
console.log(arr3); // "Banana, Kiwi"

let arr4 = str2.substr(-4);
console.log(arr4); // "Kiwi"

//The toUpperCase() method converts a string to uppercase letters.

let txt3 = "Hello World";
let upper = txt3.toUpperCase();
console.log(upper); // "HELLO WORLD"

//The toLowerCase() method converts a string to lowercase letters.

let lower = txt3.toLowerCase();
console.log(lower); // "hello world"

//The trim() method removes whitespace from both sides of a string.

let txt4 = "   Hello World!   ";
let trimmed = txt4.trim();
console.log(trimmed); // "Hello World!" 

