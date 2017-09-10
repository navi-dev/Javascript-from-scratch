/**
 * You can use variable before its getting declare without any exception. This concept is known as hoisting.
 * All the variable used inside a method/document will be hoisted at the top. So no matter where you have declare those variable 
 * it will be there at the top but with undefined value.
 */

// example - 1

console.log("value of x "+ x); // undefined
var x = 10;

// example - 2
var y = 10;
(function(){
	console.log("value of y "+ y);
  var y=  20;

})();

// the above example will be interpreted as following

var x
console.log("value of x "+ x); // undefined
x = 10;

// example - 2
var y = 10;
(function(){
     var y;
    console.log("value of y "+ y);
    y = 20;
})();


/**
 * Because of hoisting, all variables in a function should be placed at the top
 * In ECMA script 2015, let will not move variable at the top of the block. However, this will throw reference error 
 */

if(true)
{
  console.log(x)
  let x = 10;
}
