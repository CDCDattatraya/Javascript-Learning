// Function declaration
function greet(name) {
        return `Hello, ${name}!`;
}
let a = 'Dattatraya';
console.log(greet(a));
    
 // Function expression
const say = function(price, quantity) {
    return `Your Total bill, ${price*quantity}!`;
};

console.log(say(12,5));
