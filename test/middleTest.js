const middle = require('../index').middle;
const assert = require('chai').assert;

describe("#middle", () => {
  it("Returns a single item array when passed an odd length array", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3], "arr1=[1,2,3,4,5]");
  });

  it("returns 2 item array when passed an even length array", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3], "arr1=[1,2,3,4]");
  });
});
