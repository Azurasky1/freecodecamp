/**
 * Return the longest word from an text
 *
 * @param  {String} str   the provided text
 * @return {Int}          the length of the longest word found in the text
 */
function findLongestWord(str) {
  var words = str.split(' ');

  console.log(words);
  for (var word in words) {
    console.log(word);
  }
  return str.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
