// Shadowing = replacing or changing the value 

const c = 10;

{
  var a = 5;
  let b = 7;
  const c = 16; // value of c is 16 here 

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(c);

// As we know const have block level scope 

