// Your code here.
function prepend(val,lis){
  return {value:val,rest: lis} ;
}
function arrayToList(arr){
 var lis=null;
  while(arr.length){
  	lis=prepend(arr[arr.length-1],lis);
    arr.pop();
  }
  return lis;
}
function listToArray(lis){
  var arr=[];
  
  while(lis!=null){
   
    arr.push(lis.value);
   lis=lis.rest; 
  }
  return arr;
}
function nth(lis,val){
  if(lis==null) return undefined;
  if(val==0) return lis.value;
  return nth(lis.rest,val-1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20