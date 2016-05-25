// Your code here.
function reverseArray(arr){
 var newar=[];
 for(var i=0;i<arr.length;i++){
 	newar.unshift(arr[i]);
 }
  return newar;
}

function reverseArrayInPlace(arr){
 for(var i=0;i<arr.length/2;i++){
 	var tp= arr[i]; 
   arr[i]=arr[arr.length-1-i];
   arr[arr.length-1-i]=tp;
 }
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]