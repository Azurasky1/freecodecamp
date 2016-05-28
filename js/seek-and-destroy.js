/**
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 */
function destroyer(arr) {
  var args = [].slice.apply(arguments);

  // remove `arr` from args
  args.shift();

  return arr.filter(function(i) {
    return args.indexOf(i) === -1;
  });
}

module.exports = destroyer;
