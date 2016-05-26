function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
var difference = ancestry.filter(function(person){
	return (byName[person.mother]!=null); 
});

difference= difference.map(function(person){
  return person.born-byName[person.mother].born;
});
//console.log(difference);
console.log(average(difference));
// → 31.2