// Your code here.
function isEven(val){
 if(val<0) 
   return isEven(val+2);
 else if(val>1)
   return isEven(val-2);
 return val==0;
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??