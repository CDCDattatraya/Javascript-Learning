// Hoisting variables and regular function can be accessed before initialisation 

console.log(x);
namste();  // function invoked or calling 
console.log(namste);

var x = 30;

function namste() {
  console.log("Don't waste time");
}


