// Your code here.
function StretchCell(cell,width,height){
 this.cell= cell;
 this.width=width;
 this.height=height;
}

StretchCell.prototype.minWidth=function(){
  return Math.max(this.width,this.cell.minWidth());
}
StretchCell.prototype.minHeight=function(){
  return Math.max(this.height,this.cell.minHeight());
}
StretchCell.prototype.draw=function(x,y){
  return this.cell.draw(x,y);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]