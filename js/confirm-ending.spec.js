var expect = require('chai').expect;

var confirmEnding = require('./confirm-ending');

describe('Module: confirmEnding', function() {
  describe('Check if a string (first argument, str) ' +
        'ends with the given target string ' +
        '(second argument, target).', function() {
    it('confirmEnding("Bastian", "n") ' +
        'should return true.', function() {
      var result = true;

      expect(confirmEnding('Bastian', 'n')).to.deep.equal(result);
    });

    it('confirmEnding("Connor", "n") ' +
        'should return false.', function() {
      var result = false;

      expect(confirmEnding('Connor', 'n')).to.equal(result);
    });

    it('confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") ' +
        'should return false.', function() {
      expect(confirmEnding(
          'Walking on water and developing software from a specification ' +
          'are easy if both are frozen',
          'specification'))
        .to.be.false;
    });
  });
});
