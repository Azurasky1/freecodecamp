/**
 * Repeat a given string (first argument) num times (second argument).
 * Return an empty string if num is a negative number.
 */
 function repeatStringNumTimes(str, num) {
   if (num < 0) {
     return '';
   }
   if (num > 0) {
     return str.repeat(num);
   }

   return str;
 }

module.exports = repeatStringNumTimes;
