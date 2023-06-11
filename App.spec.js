const { expect } = require("chai");
const findsPairsOfIntegers = require('./App.js');

describe("findsPairsOfIntegers(list,target)", function () {
  it("test 1: should return the values when there is a combination or more of two numbers that sums target", function () {
    console.log('response test 1:\n',findsPairsOfIntegers([4,5,9], 9));
    expect(findsPairsOfIntegers([4,5,9], 9)).to.equal("4,5\n");
  });
  it("test 2: should return false when the combination of two numbers is different to  target", function () {
    console.log('response test 2:\n',findsPairsOfIntegers([1,9,5,0,20,-4,12,16,7,6,8], 12));
    expect(findsPairsOfIntegers([1,9,5,0,20,-4,12,16,7,6,8], 12)).to.equal(
      `0,12\n-4,16\n5,7\n`);
  });
  it("test 3: should not sum the same number twice to reach target or not mach element", function () {
    console.log('response test 3:\n',findsPairsOfIntegers([2, 5, 9], 4));
    expect(findsPairsOfIntegers([2, 5, 9], 4)).to.equal(false);
  });
});
