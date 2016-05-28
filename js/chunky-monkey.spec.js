var expect = require('chai').expect;

var chunkyMonkey = require('./chunky-monkey');

describe('Module: chunkyMonkey', function() {
  describe('Write a function that splits an array (first argument) ' +
        'into groups the length of size (second argument) ' +
        'and returns them as a two-dimensional array.', function() {
    it('chunkyMonkey(["a", "b", "c", "d"], 2) ' +
        'should return [["a", "b"], ["c", "d"]].', function() {
      var result = [['a', 'b'], ['c', 'd']];

      expect(chunkyMonkey(['a', 'b', 'c', 'd'], 2)).to.deep.equal(result);
    });

    it('chunkyMonkey([0, 1, 2, 3, 4, 5], 3) ' +
        'should return [[0, 1, 2], [3, 4, 5]].', function() {
      var result = [[0, 1, 2], [3, 4, 5]];

      expect(chunkyMonkey([0, 1, 2, 3, 4, 5], 3)).to.deep.equal(result);
    });

    it('chunkyMonkey([0, 1, 2, 3, 4, 5], 2) ' +
        'should return [[0, 1], [2, 3], [4, 5]].', function() {
      var result = [[0, 1], [2, 3], [4, 5]];

      expect(chunkyMonkey([0, 1, 2, 3, 4, 5], 2)).to.deep.equal(result);
    });

    it('chunkyMonkey([0, 1, 2, 3, 4, 5], 4) ' +
        'should return [[0, 1, 2, 3], [4, 5]].', function() {
      var result = [[0, 1, 2, 3], [4, 5]];

      expect(chunkyMonkey([0, 1, 2, 3, 4, 5], 4)).to.deep.equal(result);
    });

    it('chunkyMonkey([0, 1, 2, 3, 4, 5, 6], 3) ' +
        'should return [[0, 1, 2], [3, 4, 5], [6]].', function() {
      var result = [[0, 1, 2], [3, 4, 5], [6]];

      expect(chunkyMonkey([0, 1, 2, 3, 4, 5, 6], 3)).to.deep.equal(result);
    });

    it('chunkyMonkey([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) ' +
        'should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].', function() {
      var result = [[0, 1, 2, 3], [4, 5, 6, 7], [8]];

      expect(chunkyMonkey([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).to.deep.equal(result);
    });
  });
});
