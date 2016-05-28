/**
 * Return the lowest index at which a value (second argument)
 * should be inserted into an array (first argument) once it has been sorted.
 */
function getIndexToIns(arr, value) {
  var pos = 0;
  var i = 0;
  var sortedArr = arr.sort(function(a, b) {
    return a - b;
  });

  for (i = 0; i < sortedArr.length; i++) {
    if (sortedArr[0] >= value) {
      pos = 0;
      break;
    }

    if (value <= sortedArr[i + 1]) {
      pos = i + 1;
      break;
    }

    if (i + 1 === sortedArr.length) {
      pos = sortedArr.length;
      break;
    }
  }

  return pos;
}

module.exports = getIndexToIns;
