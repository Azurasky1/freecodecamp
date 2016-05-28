var expect = require('chai').expect;

var destroyer = require('./seek-and-destroy');

describe('Module: destroyer', function() {
  describe('You will be provided with an initial array (the first argument ' +
        'in the destroyer function), followed by one or more arguments. ' +
        'Remove all elements from the initial array that are of the same ' +
        'value as these arguments.', function() {
    it('destroyer([1, 2, 3, 1, 2, 3], 2, 3) ' +
        'should return [1, 1].', function() {
      var result = [1, 1];

      expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).to.deep.equal(result);
    });

    it('destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) ' +
        'should return [1, 5, 1].', function() {
      var result = [1, 5, 1];

      expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).to.deep.equal(result);
    });

    it('destroyer([3, 5, 1, 2, 2], 2, 3, 5) ' +
        'should return [1].', function() {
      var result = [1];

      expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).to.deep.equal(result);
    });

    it('destroyer([2, 3, 2, 3], 2, 3) ' +
        'should return [].', function() {
      var result = [];

      expect(destroyer([2, 3, 2, 3], 2, 3)).to.deep.equal(result);
    });

    it('destroyer(["tree", "hamburger", 53], "tree", 53) ' +
        'should return ["hamburger"].', function() {
      var result = ['hamburger'];

      expect(destroyer(['tree', 'hamburger', 53], 'tree', 53))
        .to.deep.equal(result);
    });
  });
});
