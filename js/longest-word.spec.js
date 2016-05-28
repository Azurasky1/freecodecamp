var expect = require('chai').expect;

var longestWord = require('./longest-word');

describe('Module: longestWord', function() {
  describe('Return the length of the longest word in the provided ' +
      'sentence.', function() {
    it('longestWord("The quick brown fox jumped over the lazy dog") ' +
        'should return a number.', function() {
      expect(longestWord(
          'The quick brown fox jumped over the lazy dog'))
        .to.be.an('number');
    });

    it('longestWord("The quick brown fox jumped over the lazy dog") ' +
        'should return 6.', function() {
      expect(longestWord(
          'The quick brown fox jumped over the lazy dog'))
        .to.equal(6);
    });

    it('longestWord("May the force be with you") ' +
        'should return 5.', function() {
      expect(longestWord(
          'May the force be with you'))
        .to.equal(5);
    });

    it('longestWord("Google do a barrel roll") ' +
        'should return 6.', function() {
      expect(longestWord(
          'Google do a barrel roll'))
        .to.equal(6);
    });

    it('longestWord("What is the average airspeed velocity of an unladen swallow") ' +
        'should return 8.', function() {
      expect(longestWord(
          'What is the average airspeed velocity of an unladen swallow'))
        .to.equal(8);
    });

    it('longestWord("What if we try a super-long word such as otorhinolaryngology") ' +
        'should return 19.', function() {
      expect(longestWord(
          'What if we try a super-long word such as otorhinolaryngology'))
        .to.equal(19);
    });
  });
});
