var expect = require('chai').expect;

var bouncer = require('./bouncer');

describe('Remove all falsy values from an array. ' +
      'Falsy values in JavaScript are ' +
      'false, null, 0, "", undefined, and NaN.', function() {
  it('bouncer([7, "ate", "", false, 9]) ' +
      'should return [7, "ate", 9].', function() {
    var result = [7, 'ate', 9];

    expect(bouncer([7, 'ate', '', false, 9])).to.deep.equal(result);
  });

  it('bouncer(["a", "b", "c"]) ' +
      'should return ["a", "b", "c"].', function() {
    var result = ['a', 'b', 'c'];

    expect(bouncer(['a', 'b', 'c'])).to.deep.equal(result);
  });

  it('bouncer([false, null, 0, NaN, undefined, ""]) ' +
      'should return [].', function() {
    var result = [];

    expect(bouncer([false, null, 0, NaN, undefined, ''])).to.deep.equal(result);
  });

  it('bouncer([1, null, NaN, 2, undefined]) ' +
      'should return [1, 2].', function() {
    var result = [1, 2];

    expect(bouncer([1, null, NaN, 2, undefined])).to.deep.equal(result);
  });
});
