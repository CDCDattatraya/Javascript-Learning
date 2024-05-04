// Shadowing = replacing or changing the value 

var a = 10;

function d(){
  var a = 5;
  let b = 7;
  const c = 16;

  console.log(a);
  console.log(b);
  console.log(c);
}

d();
console.log(a);


