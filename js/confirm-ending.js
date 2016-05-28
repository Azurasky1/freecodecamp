/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 */
function confirmEnding(str, target) {
  var i;
  var match = false;

  target = target.split('').reverse().join('');

  for (i = 0; i < target.length; i++) {
    match = target[i] === str[str.length - 1 - i];
  }

  return match;
}

module.exports = confirmEnding;
