var personen = (function() {
  var data = {};

  function init(a, b, c, d) {
    data.firstName = a;
    data.lastName = b;
    data.age = c;
    data.eyeColor = d;
  }

  function print() {
    console.log(data);
  }

  function nationality(a) {
    data.nationality = a;
  }

  return {
    init: init,
    print: print,
    nationality: nationality
  };
})();

personen.init('walter', 'bishops', 62, 'brown');
personen.print();
personen.nationality('gb');
personen.print();


function Person() {
  this.data = {};

  this.print = function() {
    return this.data;
  };
}

Person.prototype.name = function(a) {
  if (a) {
    this.data.name = a;
  }
};

var x = new Person();
console.log(x.print());
x.name();
console.log(x.print());
