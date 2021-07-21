'use strict';

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) console.log(`✔️Assertion passed: [${arr1}] === [${arr2}]`);
  else console.log(`❌ Assertion failed: [${arr1}] !== [${arr2}]`);
};

const without = (arr1, arr2) =>{
  let output = arr1;
  for (let i = 0; i < arr2.length; i++) {
    while (output.includes(arr2[i])) {
      let index = output.indexOf(arr2[i]);
      output.splice(index,1);
    }
  }
  return output;
};
