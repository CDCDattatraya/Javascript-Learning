// call back function - function that is passed as an argument to another function and is executed after some operation has been completed

function add(num1, num2, callback) {
    const sum = num1 + num2;
    callback(sum);
}
// callback function to display the result
function displayResult(result) {
    console.log("The result is: " + result);
}
add(5, 3, displayResult);


// higher order function - functions that accept other functions as arguments and/or return functions as output

function greet(greetingFunction) {
    const greeting = greetingFunction();
    console.log(greeting);
}

function getGreeting() {
    return "Hello, world!";
}
// Call the higher-order function and pass the getGreeting function as an argument
greet(getGreeting);

