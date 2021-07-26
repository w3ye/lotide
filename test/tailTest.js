const assertArraysEqualTest = require('../assertArraysEqual.js');
const tail = require('../tail.js');

console.log("tail[1,2,3,4,5]");
assertArraysEqualTest(tail([1,2,3,4,5]),[2,3,4,5]);
assertArraysEqualTest(tail([1,2,3,4,5]), [2,3,4]);
