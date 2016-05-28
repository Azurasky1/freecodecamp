var expect = require('chai').expect;

var factorialize = require('./factorial');

describe('Module: factorialize', function() {
  describe('Return the factorial of the provided integer. ' +
        'If the integer is represented with the letter n, ' +
        'a factorial is the product of all positive integers ' +
        'less than or equal to n.', function() {
    it('factorialize(5) should return a number.', function() {
      var result = typeof factorialize(5);

      expect(result).to.equal('number');
    });

    it('factorialize(5) should return a 120.', function() {
      expect(factorialize(5)).to.equal(120);
    });

    it('factorialize(10) should return a 3628800.', function() {
      expect(factorialize(10)).to.equal(3628800);
    });

    it('factorialize(20) should return a 2432902008176640000.', function() {
      expect(factorialize(20)).to.equal(2432902008176640000);
    });

    it('factorialize(0) should return a 1.', function() {
      expect(factorialize(0)).to.equal(1);
    });
  });
});
