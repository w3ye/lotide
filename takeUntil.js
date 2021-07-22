const takeUntil = (arr, callback) => {
  let output = [];
  for (let item of arr) {
    if (! callback(item)) output.push(item);
    else return output;
  }
  return output;
};
