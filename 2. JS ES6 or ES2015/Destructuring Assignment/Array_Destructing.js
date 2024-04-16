// Basic array destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, second, , fourth] = numbers;

console.log(first);  // Result: 1
console.log(second); // Result: 2
console.log(fourth); // Result: 4

// Swapping variables using array destructuring
let a = 1, b = 2;
[a, b] = [b, a];

console.log(a); // Result: 2
console.log(b); // Result: 1

