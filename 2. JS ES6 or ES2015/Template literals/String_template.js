// String Templates or Template Strings or Template Literals : It is string enclosed by backtick(``)

// multiline strings
let quote = `Template Strings use back-ticks 
rather than the quotes ("") to define a string` ; 

console.log(quote);

// Variable Substitutions
let firstname = "Datta";
let insta_ID = "@mi_datta_mundhe";

let post = `My name is ${firstname} and This is my Instagram ID ${insta_ID} 
so follow me on Instagram to enjoy my reels.`; 
console.log(post);

// Expression Substitution
let price = 15;
let amount = 3;
// Automatic replacing of expressions with real values is called string interpolation.
let msg = `Pay the bill of your ${amount} Vadapav which is Rs. ${price*amount}.`;
console.log(msg);

