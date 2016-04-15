function findLongestWord(str) {
  var words = str.split(' ');

  console.log(words);
  for (var word in words) {
    console.log(word);
  }
  // return str.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
