// Regular function
function bolna(name) {
    return 'Hello, ' + name + '!';
}
console.log(bolna('Dattatraya')); 
// Output: 'Hello, Dattatraya!'

// Arrow function
let bolobhaiArrow = (name) => {
    return `Hello, ${name}!`;
};
console.log(bolobhaiArrow('Bhawa')); 
// Output: 'Hello, Bhawa!'

// Shortened arrow function
let add = (a, b) => a + b;
console.log(add(34, 3)); // Output: 37
