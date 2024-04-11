//closure - access to an outer function’s scope from an inner function

function outerFunction() {
    let outerVariable = 'I am from outer function';
    
    function innerFunction() {
        console.log(outerVariable); // Access outerVariable from the outer scope
    }
    
    return innerFunction; // Return innerFunction, creating a closure
}

const closureExample = outerFunction(); // Call outerFunction and assign the returned inner function to a variable
closureExample();

//example

function createCounter() {
    let count = 0; 
    
    function increment() {
        count++; 
        console.log("Current count:", count);
    }
    
    function decrement() {
        count--; 
        console.log("Current count:", count);
    }
    
    function getCount() {
        return count; 
    }
    
    return { increment, decrement, getCount }; 
}

const counter = createCounter();

counter.increment(); 
counter.increment(); 
counter.increment(); 

counter.decrement(); 

console.log("Final count:", counter.getCount());
