// Logical operator

const a = 2;
const b = 3;

console.log("Logical operator : a = 2 , b = 3");
console.log("AND (&&) (a>b)&&(a<=b) : ", (a>b)&&(a<=b)); //Result: false
//AND(&&) : Both condition must true ( T&&T => T otherwise F )

console.log("OR (||) (a>b)||(a<=b) : ", (a>b)||(a<=b)); // Result: true
//At least one condition must true ( F&&F => F otherwise T )

console.log("NOT(!) !(a<b) :  ", !(a<b)); // Result: false
// NOT(!) : !(a<b) = !(true) = false