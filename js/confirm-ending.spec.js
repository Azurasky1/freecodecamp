var expect = require('chai').expect;

var confirmEnding = require('./confirm-ending');

describe('Module: confirmEnding', function() {
  describe('Check if a string (first argument, str) ' +
        'ends with the given target string ' +
        '(second argument, target).', function() {
    it('confirmEnding("Bastian", "n") ' +
        'should return true.', function() {
      expect(confirmEnding('Bastian', 'n')).to.be.true;
    });

    it('confirmEnding("Connor", "n") ' +
        'should return false.', function() {
      expect(confirmEnding('Connor', 'n')).to.be.false;
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
