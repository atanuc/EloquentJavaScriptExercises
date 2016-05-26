function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

var arr= [15,16,17,18,19,20,21];
function computeval(curcentury){
 var newcen=ancestry.filter(function(person){
   return Math.ceil(person.died/100)==curcentury;
 }).map(function(person){
  	return person.died-person.born; 
 });
 if(newcen.length){
   
 	var a=""+curcentury+": "+average(newcen);
   console.log(a);
 }
}
arr.forEach(computeval);
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94