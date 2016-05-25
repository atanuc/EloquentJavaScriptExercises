// Your code here.
function deepEqual(obj1,obj2){
 if(obj1==null|| obj2==null) return (obj1==null)&&(obj2==null); 
 if(typeof(obj1)!=typeof(obj2)) return false; 
 if(typeof(obj1)!="object") return obj1==obj2;
 for(var prop in obj1){
   if(!(prop in obj2)) return false; 
   else if (deepEqual(obj1[prop],obj2[prop])==false) return false;
 }
 for(var prop in obj2) if(!(prop in obj1)) return false;
 return true;
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true