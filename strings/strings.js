
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

let trimmedStart = txt4.trimStart();
console.log(trimmedStart); // "Hello World!   "

let trimmedEnd = txt4.trimEnd();
console.log(trimmedEnd); // "   Hello World!"

//The isWellFormed() method returns true if a string is well-formed,
//otherwise it returns false. 
//A string is not well formed if it contains lone surrogates.

let result = txt3.isWellFormed();
console.log(result); // true

let badString = "Hello \uD800 World";
let result2 = badString.isWellFormed();
console.log(result2); // false

let result3 = badString.toWellFormed();
console.log(result3); // "Hello "symbolof(?)" World"

//The padStart() method pads a string from the start.

let txt5 = "5";
let padded = txt5.padStart(4, "0");
console.log(padded); // "0005"

//converting a number to a string and then padding it with zeros:

let numero = 5;
let NumString = numero.toString();
let paddedNum = NumString.padStart(4, "0");
console.log(paddedNum); // "0005"

//The padEnd() method pads a string from the end.

let padded2 = txt5.padEnd(4, "x");
console.log(padded2); // "5xxx"

let padded3 = txt5.padEnd(4, "0");
console.log(padded3); // "5000"

//The repeat() method returns a string with a number of copies of a string.

//The repeat() method returns a new string.

//The repeat() method does not change the original string.

let repeated = "txt5".repeat(3);
console.log(repeated); // "txt5txt5txt5"


let txt6 = "please visit Microsoft";
let newtext = txt6.replace("Microsoft", "W3Schools, a nice place to learn");
console.log(newtext); // "please visit W3Schools"

// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match.

let txt7 = "Please visit Microsoft and Microsoft!";
let newtxt = txt7.replace("Microsoft", "W3Schools");
console.log(newtxt); // "Please visit W3Schools and Microsoft!"

//To replace all matches, use a regular expression with the /g flag (global match):

let newtxt2 = txt7.replace(/Microsoft/g, "W3Schools");
console.log(newtxt2); // "Please visit W3Schools and W3Schools!"

// The replace() method is case sensitive.
// To replace case insensitive, use a regular expression with the /i flag
//  (ignore case):

let txt8 = "Please visit Microsoft!";
let newtxt3 = txt8.replace(/MICROSOFT/i, "W3Schools");
console.log(newtxt3); // "Please visit W3Schools!"

let txt9 = "I love cats. Cats are very easy to love. Cats are very popular.";
txt9 = txt9.replaceAll("Cats", "Dogs");
txt9 = txt9.replaceAll("cats","dogs");
 console.log(txt9);

 //If the parameter is a regular expression,
 //  the global flag (g) must be set,
 //  otherwise a TypeError is thrown.

 let txt10 = "I love cats. Cats are very easy to love. Cats are very popular.";
 txt10 = txt10.replaceAll(/Cats/g, "Dogs");
 txt10 = txt10.replaceAll(/cats/g,"dogs");
 console.log(txt10);

//A string can be converted to an array with the split() method:

 let array1 = txt10.split (" ");
console.log(array1); 
// ["I", "love", "dogs.", "Dogs", "are", "very", "easy", "to", "love.", "Dogs", "are", "very", "popular."]

let array2 = txt10.split (",");
console.log(array2);

let array3 = txt10.split ("|");
console.log(array3);

let array4 = txt10.split (".");
console.log(array4);

//If the separator is "", 
// the returned array will be an array 
// of single characters:

let array5 = txt10.split ("");
console.log(array5);

