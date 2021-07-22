const findKey = (obj, callback) => {
  for (let item in obj) {
    if (callback(obj[item])) return item;
  }
};
