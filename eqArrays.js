const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`✔️Assertion passed: ${actual} === ${expected}`);
  else console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  arr1.forEach((element, index) => {
    if (element !== arr2[index]) return false;
  });
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
