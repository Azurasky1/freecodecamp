/**
 * Return the lowest index at which a value (second argument)
 * should be inserted into an array (first argument) once it has been sorted.
 */
function getIndexToIns(arr, value) {
  var i = 0;

  arr.sort(function(a, b) {
    return a - b;
  });

  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= value) {
      return i;
    }
  }

  return arr.length;
}

module.exports = getIndexToIns;
