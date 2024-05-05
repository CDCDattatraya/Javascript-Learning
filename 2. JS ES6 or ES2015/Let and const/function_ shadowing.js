// Shadowing = replacing or changing the value 

var a = 10;

function d(){
  // all variables having function level scope only
  var a = 5;
  let b = 7;
  const c = 16;

  console.log(a);
  console.log(b);
  console.log(c);
}



console.log(a);



