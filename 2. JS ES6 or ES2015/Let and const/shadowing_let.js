// Shadowing = replacing or changing the value 

let b = 10;
{
  var a = 5;
  let b = 7; // value of b is 7 here 
  const c = 16;

  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(b);

// As we know let have block level scope 

