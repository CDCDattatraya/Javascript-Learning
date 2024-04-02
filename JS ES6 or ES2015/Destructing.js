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


/*
// Basic object destructuring
let person = { name: 'John', age: 30, city: 'New York' };
let { name, age } = person;

console.log(name); // Result: 'John'
console.log(age);  // Result: 30

// Renaming variables during object destructuring
let { name: fullName, age: personAge } = person;

console.log(fullName);  // Result: 'John'
console.log(personAge); // Result: 30

// Default values during object destructuring
let { country = 'USA' } = person;

console.log(country); // Result: 'USA'
*/

/*
//Nested Restructuring 
let user = {
  id: 123,
  userDetails: {
    name: 'Alice',
    age: 25,
    address: {
      city: 'London',
      country: 'UK'
    }
  }
};

let { id, userDetails: { name, address: { city } } } = user;

console.log(id);   // Result: 123
console.log(name); // Result: 'Alice'
console.log(city); // Result: 'London'
*/