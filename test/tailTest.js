const tail = require('../index').tail;
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns empty array if array passed is empty", () => {
    assert.deepEqual(tail([]), [], "arr=[]");
  });

  it("returns empty array if array passed only has one value", () => {
    assert.deepEqual(tail([1]), [], "arr=[1]");
  });

  it("returns an array with the head of the array removed", () => {
    assert.deepEqual(tail([1,2,3,4,5]), [2,3,4,5], "arr=[1,2,3,4,5]");
  });
});
