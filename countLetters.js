const countLetters = (word) => {
  let output = {};
  for (let i of word) {
    if (output[i.toLowerCase()]) output[i.toLowerCase()] += 1;
    else output[i.toLowerCase] = 1;
  }
  return output;
};
