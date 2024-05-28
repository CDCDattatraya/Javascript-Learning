//String : text or collection of characters 

let myname = new String("Dattatraya") // string as object
let name = 'David';

console.log("Hello "+ myname+"!"); //Result: 'Hello Datta!'


//String methods : 'str.toUpperCase()', 'str.toLowerCase()', 'str.indexOf()', 'str.substring()'

let str = 'Hello, World!';
   
let upperCaseStr = str.toUpperCase();  // Result: 'HELLO, WORLD!'   
let lowerCasestr = str.toLowerCase() // Result: 'hello, world!'
let subStr = str.substring(0, 5); // Result: 'Hello'  
let indexOfComma = str.indexOf('r');  // Result: 9

console.log(str.length);
console.log("Upper Case : "+ upperCaseStr);
console.log("Lower Case : "+ lowerCasestr);
console.log("Substring Case : "+ subStr);
console.log("Index of r Case : "+ indexOfComma);

// String Escape sequence

let s = "Anything in single quote(\'\') or double quote(\"\") called as \"String\"." ;
console.log(s) // To print word with quotes => \"WORD\"

// String concatenation

let g = "Come On" ;
let d = " DXN!" ;
console.log(g+d);


