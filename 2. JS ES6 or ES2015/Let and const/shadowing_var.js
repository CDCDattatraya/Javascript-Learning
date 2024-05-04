// Shadowing = replacing or changing the value 

var a =10;
{
	var a = 5; // value of a is replaced by 5
	let b = 7; 
	const c = 16;
	
	console.log(a);
	console.log(b);
	console.log(c);
}
console.log(a);

// As we know var is globally accessible 