const snippets = require('./js/snippets');

(function(window, document, undefined) {
  var chunkArrayInGroups = snippets.chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
  var confirmEnding = snippets.confirmEnding('hello', 'o');

  console.log(chunkArrayInGroups);
  console.log(confirmEnding);
})(window, document);
