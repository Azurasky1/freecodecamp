/**
 * verify if the provided string is a palindrome
 *
 * @param  {String} str   the provided string
 * @return {Bool}         true if the string is a palindrome
 */
function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  var palindrome = str.split('').reverse().join('');

  return palindrome === str;
}

console.log(palindrome('A man, a plan, a canal. Panama'));
