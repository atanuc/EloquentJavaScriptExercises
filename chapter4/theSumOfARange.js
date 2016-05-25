// Your code here.
function range(low,high){
 var ar=[];
 var ic=1;
  if(arguments.length>2) ic=arguments[2];
  if(ic>=0){
  	for(var x= low;x<=high;x+=ic) ar.push(x);
  }else{
    for(var x= low;x>=high;x+=ic) ar.push(x);
  }
  return ar;
}
function sum(arr){
  var ans=0;
  for(var i=0;i<arr.length;i++) ans+=arr[i];
  return ans;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55