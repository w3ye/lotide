const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`✔️Assertion passed: ${actual} === ${expected}`);
  else console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
};

const countOnly = (allItems, itemsToCount) => {
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) result[item] += 1;
      else result[item] = 1;
    }
  }
  console.log(result);
  return result;
};
