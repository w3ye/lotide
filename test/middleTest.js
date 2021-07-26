const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');

console.log("middle([1,2,3,4,5]) odd length array");
assertArraysEqual(middle([1,2,3,4,5]), [3]);
console.log("middle([1,2,3,4]) even length array");
assertArraysEqual(middle([1,2,3,4]), [2,3]);
