function factorialize(num) {
  var fact = 1;

  for (var i=num; i>0; i--) {
    fact = fact * i;
  }

  return fact;
}

console.log(factorialize(5));
