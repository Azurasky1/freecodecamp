/**
 * Return the factorial value of a given number
 *
 * @param  {Int} num  the given number
 * @return {Int}      the factorial generated number
 */
function factorialize(num) {
  var fact = 1;

  for (var i = num; i > 0; i--) {
    fact = fact * i;
  }

  return fact;
}

console.log(factorialize(5));
