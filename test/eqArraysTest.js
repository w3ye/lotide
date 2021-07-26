const eqArrays = require('../eqArrays.js');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for passing through 2 equal arrays", () => {
    assert.strictEqual(eqArrays([1,2,3],[1,2,3]), true, "arr1=[1,2,3], arr2=[1,2,3]");
  });

  it("returns false for passing through 2 unequal arrays", () => {
    assert.strictEqual(eqArrays([1,2], [1,2,3]), false, "arr1=[1,2], arr2=[1,2,3]");
    assert.strictEqual(eqArrays([1,2,3], [2,3]), false, "arr1=[1,2,3], arr2=[2,3]");
  });
});
