//Destructuring assignment - unpack values from arrays, or properties from objects, into distinct variables.

let p, q, rest;
[m, b] = [10, 20];
console.log(m); // output: 10
console.log(b); // output: 20
[m, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

//all the possible syntax

/*
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // parentheses are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);
*/

//destructuring patters - Binding and assignment

const object = { a: 1, b: { c: 2 } };
const {
  a1,
  b: { c: d1 },
} = obj;
// Two variables are bound: `a` and `d`

const obj = { a: 1, b: { c: 2 } };
const { a2 } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable

//Array destructuring

const food = ["one", "two", "three"];
const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// example - Swapping variables

let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]

//Object destructuring

const user = {
    id: 42,
    isVerified: true,
  };
  
  const { id, isVerified } = user;
  
  console.log(id); // 42
  console.log(isVerified); // true

//example - Assigning to new variable names 

const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true



