var expect = require('chai').expect;

var largestOfFour = require('./largest-of-four');

describe('Module: largestOfFour', function() {
  describe('Return an array consisting of the largest number from each ' +
        'provided sub-array. For simplicity, ' +
        'the provided array will contain exactly 4 sub-arrays.', function() {
    it('largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], ' +
        '[1000, 1001, 857, 1]]) should return an array.', function() {
      expect(largestOfFour([
          [13, 27, 18, 26],
          [4, 5, 1, 3],
          [32, 35, 37, 39],
          [1000, 1001, 857, 1]]))
        .to.be.an('array')
        .that.is.instanceof(Array);
    });

    it('largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], ' +
        '[1000, 1001, 857, 1]]) should return [27,5,39,1001].', function() {
      var result = [27, 5, 39, 1001];

      expect(largestOfFour([
          [13, 27, 18, 26],
          [4, 5, 1, 3],
          [32, 35, 37, 39],
          [1000, 1001, 857, 1]]))
        .to.deep.equal(result);
    });

    it('largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], ' +
        '[1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].', function() {
      var result = [9, 35, 97, 1000000];

      expect(largestOfFour([
          [4, 9, 1, 3],
          [13, 35, 18, 26],
          [32, 35, 97, 39],
          [1000000, 1001, 857, 1]]))
        .to.deep.equal(result);
    });
  });
});
