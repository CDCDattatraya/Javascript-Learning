//scopes - set of variables that’s visible to a part of the program
/* three types - global scope, function scope, block scope */

//Global scope - everything that’s not defined inside a function or block

var globalVar = 'this is global variable';

function testScopes() {
  console.log('Global Scope:', globalVar);
}

testScopes(); // Output: this is global variable


//function scope - variables defined inside a function

function FunctionScope() {
    var localVar = 'this is local variable';
    console.log('Function Scope:', localVar);
  }
  
  FunctionScope(); // Output: this is local variable
  
   console.log(localVar); // Error: localVar is not defined
  

//block scope - variables defined inside a block

function BlockScope() {
    if (true) {
      let blockVar = 'this is block variable';
      console.log('Block Scope:', blockVar);
    }
  
    console.log(blockVar); // Error: blockVar is not defined
  }
  
  BlockScope(); // Output: this is block-scoped variable
  


