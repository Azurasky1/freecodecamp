function pippo() {
  this.name = '';
}

pippo.prototype.setName = function(name) {
  this.name = name || 'no name';
};

pippo.prototype.show = function() {
  return this.name;
  // console.log(this.name);
};

// var sonny = new pippo('sonny')
// sonny.show();

var test = pippo.prototype.show.apply({name: 'sonny'});
console.log(test);
