// Basic object destructuring
let person = { name: 'Datta', age: 23, city: 'Latur' };
let { name, age } = person;

console.log(name); // Result: 'Datta'
console.log(age);  // Result: 23

// Renaming variables during object destructuring
let { name: fullName, age: personAge } = person;

console.log(fullName);  // Result: 'Datta'
console.log(personAge); // Result: 23

// Default values during object destructuring
let { country = 'Mumbai' } = person;

console.log(country); // Result: 'Mumbai'