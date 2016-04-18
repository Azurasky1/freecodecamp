/**
 * Return the longest word from an text
 *
 * @param  {String} str   the provided text
 * @return {Int}          the length of the longest word found in the text
 */
function findLongestWord(str) {
  var words = str.split(' ');
  var longest = '';

  for (var word of words) {
    if (longest.length < word.length) {
      longest = word;
    }
  }

  return longest.length;
}
