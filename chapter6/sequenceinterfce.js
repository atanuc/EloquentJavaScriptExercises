// Your code here.
function ArraySeq(array){
 this.array=array;
 this.cur=-1;
}
ArraySeq.prototype.next= function(){
 if(this.cur>=this.array.length-1) return false;
 this.cur++;
  return true;
}
ArraySeq.prototype.curr= function(){
 return this.array[this.cur]; 
}
function RangeSeq(l,r){
 this.pos=l-1;
 this.to=r;
}
RangeSeq.prototype.next=function(){
 if(this.pos>=this.to) return false;
 this.pos++;
  return true;
}
RangeSeq.prototype.curr= function(){
	return this.pos;
}

function logFive(arr){
 ///console.log(arr);
 for(var i=0;i<5;i++ ){
 	if(arr.next()) console.log(arr.curr());
   	else break;
 }
}
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104