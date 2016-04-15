/**
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 */
function titleCase(str) {
  str = str.toLowerCase()
    .replace(/(^| )(\w)/g, function(x) {
      return x.toUpperCase();
    });

  return str;
}

console.log(titleCase('I\'m a little tea pot'));
