const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`✔️Assertion passed: ${actual} === ${expected}`);
  else console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
};

const tail = (arr) => {
  if (arr.length === 1 || arr.length === 0) return [];
  return arr.slice(1,arr.length);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
