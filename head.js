const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`Assertion passed: ${actual} === ${expected}`);
  else console.log(`Assertion passed: ${actual} === ${expected}`);
};

const head = (arr) => {
  return arr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
