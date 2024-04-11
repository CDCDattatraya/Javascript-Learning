//call() - call function using 'this' value or argument

function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person1 = { name: 'one' };
greet.call(person1, 'Hello'); 

//apply() - similar to call() accepts array of arguments

function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person2 = { name: 'two' };
const args = ['Hello'];
greet.apply(person2, args); 

//bind() - creates a new function, returns a new function 

function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person3 = { name: 'three' };
const greetPerson = greet.bind(person3);
greetPerson('Hi'); 

