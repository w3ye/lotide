const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let key in obj1) {
    if (Array.isArray(obj1[key])) {
      if (! eqArrays(obj1[key],obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};
