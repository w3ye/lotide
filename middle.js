const middle = (arr) => {
  let out = [];
  if (arr.length === 1 || arr.length === 2) return [];
  if (arr.length % 2 === 0) {
    out.push(arr[(arr.length / 2) - 1]);
    out.push(arr[arr.length / 2]);
  } else out.push(Math.round(arr.length / 2));
  return out;
};
