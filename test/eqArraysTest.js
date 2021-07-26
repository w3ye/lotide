const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

console.log([1,2,3], [1,2,3]);
assertEqual(eqArrays([1,2,3], [1,2,3]), true);
console.log([1,2,3], [2,1,3]);
assertEqual(eqArrays([1,2,3], [2,1,3]), false);
