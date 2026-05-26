console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)

let result = 5 > 4; // true
console.log( result );

// String comparison
// using the lexographical order
//string are compared letter by letter

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

// lowercase letters are greater than uppercase
console.log( 'a' > 'Z' ); // true

// Comparing different types

console.log( '2' > 1 ); 
// true, string '2' is converted to number 2

console.log( '01' == 1 );
 // true, string '01' is converted to number 1

 //for boolean values, true becomes 1 
 //and false becomes 0      

 console.log( true == 1 ); // true
 console.log( false != 0 ); // false

//Weird consequence  

 let a = 0;
 console.log( Boolean(a) ); 
 // false, 0 is falsy

 let b = "0";
 console.log( Boolean(b) ); 
 // true, non-empty string is truthy

 console.log( a == b );
// true, a is converted to 0 and b is converted to 0,
//  so they are equal



//A regular equality check == has a problem. 
// It cannot differentiate 0 from false:

console.log( 0 == false );// true

//also:

console.log( '' == false ); // true

//To fix this problem, we can use 
// the strict equality operator ===, 
//which does not perform type conversion:

console.log( 0 === false ); // false

console.log( '' === false ); // false


//Comparison of null and undefined

console.log( null === undefined ); // false
console.log( null == undefined ); // true

// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: 
// null becomes 0, while undefined becomes NaN.



// null vs 0

console.log( null > 0 ); 
// false, null becomes 0
console.log( null == 0 ); 
// false, null is only equal to undefined
console.log( null >= 0 ); 
// true, null becomes 0

// undefined vs 0

console.log( undefined > 0 ); 
// false, undefined becomes NaN
console.log( undefined < 0 ); 
// false, undefined becomes NaN
console.log( undefined == 0 ); 
// false, undefined is only equal to null 

//NaN is a special numeric value 
// which returns false for all comparisons.

console.log( NaN > 0 ); // false
console.log( NaN < 0 ); // false
console.log( NaN == 0 ); // false
console.log( NaN == NaN ); 
// false, NaN is not equal to itself 