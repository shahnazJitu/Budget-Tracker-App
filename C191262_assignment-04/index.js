// Import NPM Package
const _ = require('underscore');

// Call appropriate function from the NPM package to solve the assignment

const arr=["Java","Javascript","Typescript"];

/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "Java"
 */
// First Answer 
console.log("Given array contains 'Java' : ",_.contains(arr,"Java"));


/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "C++"
 */
// Second Answer
console.log("Given Array contains 'C++' : ",_.contains(arr,"C++"));
