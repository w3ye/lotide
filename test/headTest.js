const assertEqual = require('../assertEqual.js');
const head = require('../head.js');

console.log("head([1,2,3,4])");
assertEqual(head([1,2,3,4]), 1);
assertEqual(head([1,2,3,4]), 2);
