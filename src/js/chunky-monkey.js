/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument)
 * and returns them as a two-dimensional array.
 */
function chunkArrayInGroups(arr, size) {
  var temp = [];
  var chunk = [];

  temp = arr.slice(0, size);

  chunk.push(temp);

  return chunk;
}

module.exports = chunkArrayInGroups;
