for(var i = 1;i<=100; i++){
 if(i%3==0||i%5==0){
   var s = "";
   if(i%3==0) s+="Fizz"; 
   if(i%5==0) s+="Buzz";
   console.log(s);
 }else console.log(i);
}