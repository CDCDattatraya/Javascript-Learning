//function syntax

function test() {
  // code 
}
test()

//function parameters

function test(color = 'red', age = 20) {
    console.log(color, age)
  }
  
  test("green", 24)
  test("black")

//returning values

function test(condition) {
    if (condition === false) return
    return "hi!"
  }
  const result = test(true)

//nested functions

const test = function() {
    const dosomething = function() {
    }
    dosomething()
    return "test"
  }

//immediately-invoked function expression

(function() {
    console.log('Hello there');
    })();

//Recursive functions

function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
//arrow functions - example 

const test = () => {
    console.log('Hello world');
  }
    test()

