const findKeyByValue = (obj, value) => {
  for (let item in obj) {
    if (obj[item] === value) return item;
  }
};
