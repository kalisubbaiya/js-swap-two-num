var a,b,c;
a=parseInt(prompt("Enter a value"));
b=parseInt(prompt("Enter b value"));
function swap(){
   c=a;
   a=b;
   b=c;
   document.write(a+"<br>")
   document.write(b);
}
swap();