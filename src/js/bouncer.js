/**
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */
function bouncer(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

module.exports = bouncer;
