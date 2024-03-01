"use strict";
// Equality and Inequality test
console.log("Equality test with strings: ", "Apple" === "Apple");
// Equality and Inequality test
console.log("Equality test with strings: ", "Orange" != "Apple");
// Test using the lower case function
console.log("Lower Case function test:", "Hello".toLowerCase() === "hello");
// Numerical tests involving equality
console.log("Equality test with numbers: ", 25 === 25);
// Numerical tests involving inequality.
console.log("inequality test with numbers:", 25 != 35);
//greater than 
console.log("Greater than test: ", 10 > 5);
//less than
console.log("less than test: ", 5 < 10);
//Tests using "and"operator
console.log("And operator test:", 5 === 5 && 10 > 5);
//Tests using "or"operator
console.log("Or operator test:", 5 === 5 || false);
//greater than or equal to
console.log("Greater than or equal to test: ", 10 >= 10);
//less than or equal to
console.log("less than or equal to tests: ", 5 <= 10);
//Test whether an item is in a array.
const fruits = ['Orange', 'Mango', 'Banana'];
console.log(' "Test Orange" in the array: ', fruits.includes("Orange"));
//Test wheather an item is not in the Array
console.log('Testing "Aple" is not in Array: ', !fruits.includes('Apple'));
