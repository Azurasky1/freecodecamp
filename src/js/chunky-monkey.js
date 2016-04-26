/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument)
 * and returns them as a two-dimensional array.
 */
function chunkArrayInGroups(arr, chunks) {
  var newArr = [];

  for (var i = 0; i < arr.length; i += chunks) {
    newArr.push(arr.slice(i, i + chunks));
  }

  return newArr;
}

module.exports = chunkArrayInGroups;
