/*
    * variable inside function is work as local variable, it will not be available if access outside 
    * let is introduced in echmascript 2015. Let is used to define local variable.
*/
if(true)
{
    var x = 10
}
console.log(x);


if(true)
{
    let y = 20;
}
console.log(y);