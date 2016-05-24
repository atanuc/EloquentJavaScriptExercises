// Your code here.
function countChar(mystr,character){
  var x=0;
  for(i=0;i<mystr.length;i++){
  	if(mystr[i]==character) x++;
  }
  return x;
}
function countBs(mystr){
  return countChar(mystr,"B"); 
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4